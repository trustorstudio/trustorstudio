import Project from "~/components/project";
import Title from "~/components/title";
import { projects } from "~/databases/projects";

export default function ProjectPage() {
  return (
    <main className="relative pt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Title
          title="Trustor Studio Projects"
          description="Insights, updates, and stories from the Andamio ecosystem. Explore our journey building trust protocols for distributed work."
        />
        <section className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <Project
              key={project.id}
              image={project.image}
              action={project.action}
              title={project.title}
              author={project.author || "Admin"}
              slug={project.slug || project.id}
              datetime={new Date(project.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
