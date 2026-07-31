type ApplicationDetailPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ApplicationDetailPage({
    params,
}: ApplicationDetailPageProps) {
    const { id } = await params;

    return (
        <main>
            <h1>Detalle de la candidatura</h1>
            <p>ID de la candidatura: {id}</p>
        </main>
    );
}