interface Speaker {
    id: number;
    name: string;
    photo: string;
    profile?: string[];
    position: string;
}

/*
    {
        name: "Ricardo Haneine",
        photo: "https://via.placeholder.com/150",
        profile: "Es Ingeniero en Sistemas Computacionales por la Universidad de las Américas Puebla, Maestro en Ciencias en Ingeniería de Software por el Instituto Tecnológico de Estudios Superiores de Monterrey y Doctor en Ciencias de la Computación por la Universidad de las Américas Puebla. Actualmente es Director de la Facultad de Ingeniería de la Universidad de las Américas Puebla y profesor de tiempo completo en el Departamento de Ciencias de la Computación. Sus áreas de interés son la ingeniería de software, la calidad de software, la educación en ingeniería de software y la educación en línea.",
        position: "Director de la Facultad de Ingeniería",
    }
*/

const speaker : Speaker[] = []

export default speaker;