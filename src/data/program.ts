interface speaker {
    name: string;
    position: string;
    photo: string;
}

interface program {
    name: string;
    hours: string;
    speakers: speaker[];
}

/*
    {
        "name": "Inaguración",
        "hours": "09:55 hrs",
        "speakers": [
            {
                "name": "Ricardo Haneine",
                "position": "Director de la Facultad de Ingeniería",
                "photo": "https://via.placeholder.com/150"
            }
        ]
        
    }
*/

const program : program[] = [
    
]

export default program;