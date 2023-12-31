
import { Modelo } from "/Users/55459/OneDrive/Documentos/estacionamento vue/estacionamento-vuejs/project/src/model/ModeloModel";
import axios, { AxiosInstance } from 'axios';
class ModeloClient {

    private axiosClient: AxiosInstance

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/modelo',
            headers: { 'Content-type': 'application/json' }
        });
    }

    public async findById(id: number): Promise<Modelo> {
        try {
            return (await this.axiosClient.get<Modelo>(`/${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response.data)
        }
    }

    public async listaAll(): Promise<Modelo[]> {
        try {
            return (await this.axiosClient.get<Modelo[]>(`/lista`)).data
        } catch (error: any) {
            return Promise.reject(error.response.data)
        }
    }

    public async cadastrar(modelo: Modelo): Promise<string> {
        try {
            return (await this.axiosClient.post<string>(``, modelo)).data
        } catch (error: any) {
            return Promise.reject(error.response.data)
        }
    }
    public async editar(id: number, modelo: Modelo): Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/${id}`, modelo)).data
        } catch (error: any) {
            return Promise.reject(error.response.data)
        }
    }
    public async excluir(id: number): Promise<string> {
        try {
            return (await this.axiosClient.delete<string>(`/${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response.data)
        }
    }
}

export default new ModeloClient();