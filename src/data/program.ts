interface Speaker {
    id: number;
    name: string;
    photo: string;
    profile?: string;
    position: string;
}

interface Program {
    name: string;
    description?: string;
    hours: string;
    speakers?: Speaker[];
}

/*
    {
        name: "Inaguración",
        description: "Palabras de bienvenida y presentación del foro",
        hours: "09:55 hrs",
        speakers: [
            {
                name: "Ricardo Haneine",
                photo: "https://via.placeholder.com/150",
                profile: "Es Ingeniero en Sistemas Computacionales por la Universidad de las Américas Puebla, Maestro en Ciencias en Ingeniería de Software por el Instituto Tecnológico de Estudios Superiores de Monterrey y Doctor en Ciencias de la Computación por la Universidad de las Américas Puebla. Actualmente es Director de la Facultad de Ingeniería de la Universidad de las Américas Puebla y profesor de tiempo completo en el Departamento de Ciencias de la Computación. Sus áreas de interés son la ingeniería de software, la calidad de software, la educación en ingeniería de software y la educación en línea.",
                position: "Director de la Facultad de Ingeniería",
            }
        ]
        
    }
*/

const program : Program[] = [
    {
        "name": "Inauguración del Foro y palabras de bienvenida",
        "hours": "10:00 - 10:30 Hrs",
    },
    {
        "name": "Tendencias globales en Electromovilidad",
        "hours": "10:30 - 11:30 Hrs",
    },
    {
        "name": "Logística y producción en la Electromovilidad",
        "hours": "11:30 - 12:30 Hrs",
    },
    {
        "name": "Descanso",
        "hours": "12:30 - 12:40 Hrs",
    },
    {
        "name": "Marco regulatorio de la Electromovilidad",
        "hours": "12:40 - 13:40 Hrs",
    },
    {
        "name": "Tecnología e innovación en la Electromovilidad",
        "hours": "13:40 - 14:40 Hrs",
    },
    {
        "name": "Electromovilidad: Hacia un futuro sostenible",
        "hours": "14:40 - 15:40 Hrs",
    },
]

export default program;