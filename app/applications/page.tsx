type Application = {
    id: number;
    company: string;
    position: string;
    status: string;
}

const applications: Application[] = [
    { id: 1, company: "TechCorp", position: "Frontend Developer", status: "Applied" },
    { id: 2, company: "CodeWorks", position: "Backend Developer", status: "Interviewing" },
    { id: 3, company: "WebSolutions", position: "Full Stack Developer", status: "Offer" },
];

export default function ApplicationsPage() {
    return (
        <main>
            <h1>Mis candidaturas</h1>
            <ul>
                {applications.map((app) => (
                    <li key={app.id}>
                        <h2>{app.position}</h2>
                        <p>{app.company}</p>
                        <p>Estado: {app.status}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}