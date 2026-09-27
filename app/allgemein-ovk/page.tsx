import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import TextImage from "@/components/TextImage";

export const metadata: Metadata = { title: "Was bedeutet „Ort von Kirche“" };

export default function BuchhandlungPage() {
  return (
    <>
      <PageHeader
        title="Was bedeutet „Ort von Kirche“"
        crumbs={[{ label: "Was bedeutet „Ort von Kirche“", href: "/allgemein-ovk" }]}
      />

      <div className="mx-auto max-w-[1150px] px-5 py-16 lg:px-9 lg:py-24 text-justify"> 
        <TextImage
//          title={"Was sind „Orte von Kirche“"}
          imageSide="right"
          image="/images/mariawald/logo.jpg"
          alt="Logo Bistum Aachen"
          paragraphs={[           
				
"Grundsätzlich und seit jeher vollzieht sich innerhalb der katholischen Kirche christliches Leben und damit \„Ecclesia\“ auf äußerst vielfältige Art und Weise. Wohl ist Ecclesia im tradierten Bild vornehmlich die \„Pfarrkirche mit der zugehörigen Gemeinde\“, und für die Mehrzahl der Christen war dies der maßgebliche Ort, an dem Glauben gelebt und geteilt wurde. Heute allerdings versteht man unter einem \„Ort von Kirche\“ nicht nur das Kirchengebäude und die Pfarrgemeinde, sondern \„Ort von Kirche\“ ist ein weit gefasster Begriff für vielfältige Formen, wie Menschen ihren Glauben leben, Gemeinschaft erfahren und dem Evangelium begegnen können. \„Orte von Kirche\“ können zum Beispiel Kindergärten, Altenheime, Jugendgruppen, Krankenhäuser, Pfarrzentren oder Gruppen zur Trauerbegleitung sein. Es umfasst also traditionelle wie auch innovative Begegnungsorte und Aktivitäten, die Sinn stiften und Menschen zusammenbringen, erklärt das Bistum Aachen. Das bedeutet aber nicht, dass jede Gruppe, die sich zusammenfindet, sofort ein \„Ort von Kirche\“ ist. Vielmehr müssen verschiedene Kriterien erfüllt sein, um als \„Ort von Kirche\“ anerkannt zu werden. Das Bistum Aachen benennt konkret a) Lebendigkeit, b) Wirksamkeit und Strahlkraft, c) Gemeinschaft/Solidarität sowie d) die Ermöglichung von Engagement sowie Entwicklung und führt dazu im Detail aus:"
    
          ]}
        />

<div className="h-8" />
<span>
  <p style={{ fontSize: '30px' , fontWeight: 'bold' }}>Ein Ort von Kirche ist lebendig,</p> <br />

  <p className="text-[16px] leading-relaxed text-foreground/80">

    • wenn er einen Bezug zur Lebensrealität der Menschen im Sozialraum hat.<br />
    • wenn das Zeugnis der Frohen Botschaft Jesu Christi zum Mitmachen einlädt.<br />
    • wenn hier das Leben als möglicher Ort der Gottesbegegnung in all seinen Facetten gefeiert und gewürdigt wird.</p>
       
</span>
<div className="h-8" />
<span>
  <p style={{ fontSize: '30px' , fontWeight: 'bold' }}>Ein Ort von Kirche ist wirksam,</p> <br />

  <p className="text-[16px] leading-relaxed text-foreground/80">
  
    • wenn sich in ihm das Wirken des Heiligen Geistes ahnen lässt.<br />
    • wenn durch ihn das Evangelium Jesu Christi erfahrbar wird.<br />
    • wenn er Strahlkraft entfaltet und Menschen anzieht.</p>
    
</span>
<div className="h-8" />
<span>
  <p style={{ fontSize: '30px' , fontWeight: 'bold' }}>Ein Ort von Kirche ist gemeinschaftlich und solidarisch,</p> <br />

  <p className="text-[16px] leading-relaxed text-foreground/80">

    • wenn er Menschen einlädt, Leben und Glauben zu teilen.<br />
    • wenn durch die in ihm versammelten Menschen die Nähe Gottes erfahrbar wird.<br />
    • wenn sich Menschen hier angenommen fühlen und Unterstützung erfahren.</p>

</span>
<div className="h-8" />
<span>
  <p style={{ fontSize: '30px' , fontWeight: 'bold' }}>Ein Ort von Kirche ermöglicht Engagement und Entwicklung,</p><br />

  <p className="text-[16px] leading-relaxed text-foreground/80">

    • wenn Menschen hier ihre Begabungen entdecken und Christsein leben können.<br />
    • wenn er Vielfalt Raum gibt und auf die Einheit der Kirche geöffnet ist.<br />
    • wenn hier Neues ausprobiert werden darf.</p>

</span>
<div className="h-8" />
<span>
  <p className="text-[16px] leading-relaxed text-foreground/80 text-justify">
Jede Gruppe, die ein „Ort von Kirche“ werden will, kann vor dem Rat des Pastoralen Raums (Mariawald liegt im Pastoralen Raum „Kreuzau-Hürtgenwald-Heimbach-Nideggen) darstellen, worin ihr Beitrag für die Menschen im jeweiligen Pastoralen Raums liegt.</p>
</span>


        {/* Einblicke */}
         <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
 {/* auskommentiert         
          {gallery.map((g) => (
            <div key={g.src} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black/10">
              <Image src={g.src} alt={g.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
          ))}
 */}
        </div>
      </div>
     
    </>
  );
}
