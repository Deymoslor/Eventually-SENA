export interface InvitationProvSerI {
    idProveedor: number;
    nombreProveedor: string;
    apellidoProveedor: string;
    correoProveedor: string;
    celular: string;
    idServicios: number;
    TipoServicio_idtipoServicio: number;
    nombreServicio: string;
    descripcionServicio: string;
    precioEstimado: string;
    imagen: string;
    historialEmpresas: string;
    Evento_idEvento: number;
    Servicio_idServicios: number;
    estadoInvitacion: number;
}
