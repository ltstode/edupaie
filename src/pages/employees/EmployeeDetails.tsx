
import { useState, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Pencil, 
  Trash2, 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Briefcase, 
  Building, 
  DollarSign,
  Clock,
  FileText,
  Upload,
  Camera,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Navbar } from "../../components/Navbar";
import { useEmployees } from "../../contexts/EmployeeContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const EmployeeDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getEmployee, deleteEmployee, uploadAvatar } = useEmployees();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [photoDialogOpen, setPhotoDialogOpen] = useState(false);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const employee = getEmployee(id || "");
  
  if (!employee) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container py-8 flex-1 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Employé non trouvé</h2>
          <p className="text-muted-foreground mb-4">
            L'employé que vous recherchez n'existe pas ou a été supprimé.
          </p>
          <Button asChild>
            <Link to="/employees">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à la liste des employés
            </Link>
          </Button>
        </div>
      </div>
    );
  }
  
  const formatSalary = (salary: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF',
      maximumFractionDigits: 0
    }).format(salary);
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };
  
  const handleDelete = () => {
    deleteEmployee(employee.id);
    setDeleteDialogOpen(false);
    navigate("/employees");
  };
  
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
    
    // Créer une URL d'aperçu
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
  };
  
  const handleUploadPhoto = async () => {
    const file = fileInputRef.current?.files?.[0];
    if (!file) return;
    
    setUploadingPhoto(true);
    
    try {
      await uploadAvatar(employee.id, file);
      toast.success("Photo de profil mise à jour avec succès");
      setPhotoDialogOpen(false);
    } catch (error) {
      console.error("Erreur lors du téléchargement de la photo:", error);
      toast.error("Erreur lors du téléchargement de la photo");
    } finally {
      setUploadingPhoto(false);
      setPreviewUrl(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container py-8 flex-1">
        <div className="mb-6">
          <Button variant="ghost" onClick={() => navigate("/employees")} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux employés
          </Button>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                {employee.firstName} {employee.lastName}
              </h1>
              <p className="text-muted-foreground">{employee.position}</p>
            </div>
            <div className="flex items-center gap-2">
              <Link to={`/employees/edit/${employee.id}`}>
                <Button variant="outline" className="flex items-center gap-2">
                  <Pencil className="h-4 w-4" />
                  Modifier
                </Button>
              </Link>
              <Button 
                variant="destructive" 
                className="flex items-center gap-2"
                onClick={() => setDeleteDialogOpen(true)}
              >
                <Trash2 className="h-4 w-4" />
                Supprimer
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="glass-card animate-fade-in">
            <CardHeader>
              <CardTitle>Informations personnelles</CardTitle>
              <CardDescription>Coordonnées et détails de l'employé</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center">
                  <div className="relative group">
                    <Avatar className="h-24 w-24 cursor-pointer transition-all group-hover:opacity-80" onClick={() => setPhotoDialogOpen(true)}>
                      <AvatarImage src={employee.avatar} alt={`${employee.firstName} ${employee.lastName}`} />
                      <AvatarFallback className="text-2xl font-medium">
                        {employee.firstName[0]}{employee.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div 
                      className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      onClick={() => setPhotoDialogOpen(true)}
                    >
                      <Camera className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <User className="h-5 w-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Nom complet</p>
                      <p className="font-medium">{employee.firstName} {employee.lastName}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{employee.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Téléphone</p>
                      <p className="font-medium">{employee.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Date d'embauche</p>
                      <p className="font-medium">{formatDate(employee.hireDate)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card animate-fade-in transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle>Informations professionnelles</CardTitle>
              <CardDescription>Poste et département</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Briefcase className="h-5 w-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Poste</p>
                    <p className="font-medium">{employee.position}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Building className="h-5 w-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Département</p>
                    <p className="font-medium">{employee.department}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DollarSign className="h-5 w-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Salaire</p>
                    <p className="font-medium">{formatSalary(employee.salary)}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Statut</p>
                    <Badge variant={employee.status === "active" ? "default" : "secondary"}>
                      {employee.status === "active" ? "Actif" : "Inactif"}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card animate-fade-in transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle>Documents</CardTitle>
              <CardDescription>Fiches de paie et contrats</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start transition-colors hover:bg-green-100 dark:hover:bg-green-900/20 hover:text-green-700 dark:hover:text-green-400 hover:border-green-500"
                  onClick={() => navigate(`/payroll/${employee.id}`)}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Générer fiche de paie
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start transition-colors hover:bg-blue-100 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400 hover:border-blue-500"
                  onClick={() => navigate(`/employees/${employee.id}/contract`)}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Voir le contrat
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start transition-colors hover:bg-amber-100 dark:hover:bg-amber-900/20 hover:text-amber-700 dark:hover:text-amber-400 hover:border-amber-500"
                  onClick={() => navigate(`/employees/${employee.id}/certificate`)}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Attestation de travail
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Dialogue de confirmation de suppression */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirmer la suppression</DialogTitle>
            <DialogDescription>
              Êtes-vous sûr de vouloir supprimer {employee.firstName} {employee.lastName} ? Cette action ne peut pas être annulée.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Annuler
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Supprimer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Dialogue pour charger une photo */}
      <Dialog open={photoDialogOpen} onOpenChange={setPhotoDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Charger une photo de profil</DialogTitle>
            <DialogDescription>
              Choisissez une image pour la photo de profil. JPG, PNG ou GIF acceptés.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="flex justify-center">
              {previewUrl ? (
                <div className="relative">
                  <img 
                    src={previewUrl} 
                    alt="Aperçu" 
                    className="h-40 w-40 object-cover rounded-full border-2 border-primary"
                  />
                  <Button 
                    className="absolute top-0 right-0 h-8 w-8 rounded-full p-0"
                    size="icon"
                    variant="secondary"
                    onClick={() => setPreviewUrl(null)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="h-40 w-40 rounded-full border-2 border-dashed flex items-center justify-center bg-muted">
                  <Upload className="h-10 w-10 text-muted-foreground" />
                </div>
              )}
            </div>
            
            <div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <Button
                variant="outline"
                className="w-full"
                onClick={() => fileInputRef.current?.click()}
              >
                Sélectionner une image
              </Button>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setPhotoDialogOpen(false);
              setPreviewUrl(null);
            }}>
              Annuler
            </Button>
            <Button 
              disabled={!previewUrl || uploadingPhoto}
              onClick={handleUploadPhoto}
              className="bg-green-600 hover:bg-green-700"
            >
              {uploadingPhoto ? (
                <span className="flex items-center">
                  <span className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full"></span>
                  Téléchargement...
                </span>
              ) : (
                <span className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Confirmer
                </span>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmployeeDetails;
