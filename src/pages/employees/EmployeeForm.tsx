
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ArrowLeft, Save, Upload, Camera, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useEmployees, Employee } from "../../contexts/EmployeeContext";
import { Navbar } from "../../components/Navbar";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Schéma de validation
const employeeSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  position: z.string().min(2, "Le poste est requis"),
  department: z.string().min(2, "Le département est requis"),
  salary: z.coerce.number().positive("Le salaire doit être positif"),
  hireDate: z.string().min(1, "La date d'embauche est requise"),
  status: z.enum(["active", "inactive"]),
  avatar: z.string().optional(),
});

type EmployeeFormValues = z.infer<typeof employeeSchema>;

const EmployeeForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addEmployee, updateEmployee, getEmployee, uploadAvatar } = useEmployees();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const isEditMode = !!id;
  
  // Initialiser le formulaire
  const form = useForm<EmployeeFormValues>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      position: "",
      department: "",
      salary: 0,
      hireDate: new Date().toISOString().split("T")[0],
      status: "active",
      avatar: "",
    },
  });
  
  // Charger les données de l'employé en mode édition
  useEffect(() => {
    if (isEditMode) {
      const employee = getEmployee(id);
      if (employee) {
        form.reset({
          firstName: employee.firstName,
          lastName: employee.lastName,
          email: employee.email,
          phone: employee.phone,
          position: employee.position,
          department: employee.department,
          salary: employee.salary,
          hireDate: employee.hireDate,
          status: employee.status,
          avatar: employee.avatar,
        });
        
        if (employee.avatar && employee.avatar !== "/placeholder.svg") {
          setPreviewUrl(employee.avatar);
        }
      } else {
        toast.error("Employé non trouvé");
        navigate("/employees");
      }
    }
  }, [isEditMode, id, getEmployee, form, navigate]);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Vérifier la taille du fichier (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error("La taille du fichier doit être inférieure à 5MB");
      return;
    }
    
    // Vérifier le type du fichier
    if (!['image/jpeg', 'image/png', 'image/gif', 'image/webp'].includes(file.type)) {
      toast.error("Seules les images JPEG, PNG, GIF et WEBP sont acceptées");
      return;
    }
    
    setSelectedFile(file);
    
    // Créer une URL d'aperçu
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
  };
  
  const removeImage = () => {
    setPreviewUrl(null);
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  
  const onSubmit = async (data: EmployeeFormValues) => {
    try {
      setIsSubmitting(true);
      
      // Créer un objet employee avec toutes les propriétés requises
      const employeeData: Omit<Employee, "id"> = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        position: data.position,
        department: data.department,
        salary: data.salary,
        hireDate: data.hireDate,
        status: data.status,
        avatar: data.avatar || "/placeholder.svg"
      };
      
      if (isEditMode && id) {
        // Si une nouvelle image a été sélectionnée, la télécharger d'abord
        if (selectedFile) {
          await uploadAvatar(id, selectedFile);
        } else {
          updateEmployee(id, data);
        }
        toast.success("Employé mis à jour avec succès");
        navigate(`/employees/${id}`);
      } else {
        // Pour un nouvel employé
        const newEmployeeId = Date.now().toString();
        
        // Ajouter l'employé
        addEmployee(employeeData);
        
        // Si une image a été sélectionnée, la télécharger
        if (selectedFile) {
          await uploadAvatar(newEmployeeId, selectedFile);
        }
        
        toast.success("Employé ajouté avec succès");
        navigate("/employees");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
      toast.error("Une erreur est survenue");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container py-8 flex-1">
        <Button variant="ghost" onClick={() => navigate("/employees")} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux employés
        </Button>
        
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">
            {isEditMode ? "Modifier l'employé" : "Ajouter un employé"}
          </h1>
          <p className="text-muted-foreground">
            {isEditMode 
              ? "Mettez à jour les informations de l'employé" 
              : "Remplissez le formulaire pour ajouter un nouvel employé"}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Informations personnelles</h2>
                <Separator />
                
                <div className="flex justify-center mb-6">
                  <div className="relative group">
                    <Avatar className="h-24 w-24 cursor-pointer border-2 border-primary/20">
                      {previewUrl ? (
                        <AvatarImage src={previewUrl} alt="Avatar" />
                      ) : (
                        <AvatarFallback className="bg-primary/10 text-primary text-2xl font-medium">
                          {form.watch("firstName")?.[0] || "N"}{form.watch("lastName")?.[0] || "N"}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    
                    <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}>
                      <Camera className="h-6 w-6 text-white" />
                    </div>
                    
                    {previewUrl && (
                      <button 
                        type="button"
                        className="absolute -top-2 -right-2 bg-red-500 rounded-full text-white p-1 hover:bg-red-600 transition-colors"
                        onClick={removeImage}
                      >
                        <XCircle className="h-4 w-4" />
                      </button>
                    )}
                    
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prénom</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Jean" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Dupont" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="email" 
                            placeholder="jean.dupont@example.com" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="01 23 45 67 89" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Informations professionnelles</h2>
                <Separator />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Poste</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Professeur de mathématiques" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Département</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Sciences" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="salary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Salaire (FCFA)</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="number" 
                            placeholder="450000" 
                          />
                        </FormControl>
                        <FormDescription>
                          Montant mensuel brut en FCFA
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="hireDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date d'embauche</FormLabel>
                        <FormControl>
                          <Input {...field} type="date" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Statut</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez un statut" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="active">Actif</SelectItem>
                          <SelectItem value="inactive">Inactif</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="flex justify-end gap-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate("/employees")}
                >
                  Annuler
                </Button>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-green-600 hover:bg-green-700 transition-colors animate-in"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <span className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full"></span>
                      {isEditMode ? "Mise à jour..." : "Création..."}
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Save className="mr-2 h-4 w-4" />
                      Enregistrer
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
