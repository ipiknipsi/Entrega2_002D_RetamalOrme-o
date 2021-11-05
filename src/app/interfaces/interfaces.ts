export interface RespuestaToHeadLines {

data: Data[]

}

export interface Data{

    id: number;
    date: Date;
    title: string;
    extra: string;

}