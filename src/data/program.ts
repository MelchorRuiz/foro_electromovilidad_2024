interface speaker {
    name: string;
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
                "photo": "https://via.placeholder.com/150"
            }
        ]
        
    }
*/

const program : program[] = [
    
]

export default program;