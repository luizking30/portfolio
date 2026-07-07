import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Technologies from "@/components/sections/Technologies";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import GitHubStats from "@/components/sections/GitHubStats";
import Contact from "@/components/sections/Contact";
import {
  getGitHubUser,
  getGitHubRepos,
  getGitHubEvents,
  getTopLanguages,
  getRecentRepos,
  getTotalCommits,
  getLastCommitInfo,
  getContributions,
} from "@/lib/github";
import Contributions from "@/components/sections/Contributions";

const WHATSAPP_NUMBER = "5561981048509";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const EMAIL = "luiz.eduardo.amorim@hotmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/luiz-amorim-5a0847400/";
const WEBSITE = "luizamorim.dev";

const ABOUT_TEXT =
  "Desenvolvedor Full Stack com mais de 4 anos de experiência criando soluções web, automações e integrações. Apaixonado por tecnologia, aprendizado contínuo e por transformar ideias em produtos digitais que geram impacto. Atuo com Java, Python, Spring Boot, React, Next.js e bancos de dados relacionais.";

export default async function Home() {
  const user = await getGitHubUser();
  const repos = await getGitHubRepos();
  const events = await getGitHubEvents();

  const languages = getTopLanguages(repos);
  const recentRepos = getRecentRepos(repos, 4);
  const totalCommits = await getTotalCommits(repos);
  const lastCommit = getLastCommitInfo(events);
  const contributions = await getContributions();

  const name = user.name || "Luiz Eduardo Mendonça Amorim";
  const location = user.location || "Taguatinga, DF";
  const title = "Desenvolvedor Full Stack";
  const description =
    "Desenvolvo aplicações modernas, escaláveis e de alta performance com foco em soluções reais e resultados.";

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero
          name={name}
          title={title}
          description={description}
          location={location}
          experience="4+ anos"
          focus="Web • APIs • Bots"
          available={true}
          publicRepos={user.public_repos}
          totalCommits={totalCommits}
          followers={user.followers}
          languages={languages}
          avatarUrl="/foto.jpeg"
          githubUrl={user.html_url}
          linkedinUrl={LINKEDIN_URL}
          email={EMAIL}
          whatsapp={WHATSAPP_LINK}
          lastCommitRepo={lastCommit?.repo}
          lastCommitTime={lastCommit?.time}
        />
        <About
          text={ABOUT_TEXT}
          location={location}
          experience="4+ anos"
          focus="Web • APIs • Bots"
          available={true}
        />
        <Technologies languages={languages} />
        <Projects repos={recentRepos} githubUrl={user.html_url} />
        <Experience />
        <Contributions contributions={contributions} />
        <GitHubStats
          publicRepos={user.public_repos}
          followers={user.followers}
          totalCommits={totalCommits}
          recentProjects={recentRepos.length}
          githubUrl={user.html_url}
          lastCommitRepo={lastCommit?.repo}
          lastCommitTime={lastCommit?.time}
        />
        <Contact
          email={EMAIL}
          location={location}
          website={WEBSITE}
          linkedinUrl={LINKEDIN_URL}
          githubUrl={user.html_url}
          whatsapp={WHATSAPP_LINK}
          available={true}
        />
      </main>
      <Footer />
    </div>
  );
}
