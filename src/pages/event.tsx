import { useParams } from "react-router-dom";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { Video } from "../components/video";

export function Event(){
    const { slug } = useParams<{slug: string}>()

    return(
    <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1">
            { slug 
                ? <Video lessonSlug={slug} /> 
                : <div className="flex-1" /> } 
            <Sidebar />
        </main>
    </div>
    )
}

/* Colocar um component pra caso não ache um vídeo na div do lado do component Video */