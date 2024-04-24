import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Nischal Dahal" },
    {
      name: "description",
      content: "Nischal Dahal from Nepal.",
    },
  ];
};

export default function Index() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.8",
        width: "50%",
        margin: "auto",
      }}
    >
      <br />
      <h1
        style={{
          lineBreak: "anywhere",
          lineHeight: "1",
        }}
      >
        Nischal Dahal
      </h1>
      <hr />
      <p>
        Hey, I am Nischal Dahal, a software engineer.
        <br />
        Working at AITC, as a Full Stack Developer. I am content creator, i love
        creating the open source projects. I love learning new technologies. You
        can find me on twitter @broisnees, I love working on devops and dba, I
        am exploring AI. I 😘 arc btw.
      </p>

      {/* <h3>I am building the problem solving projects.</h3> */}

      <li>Typescript</li>
      <li>Flutter</li>
      <li>Rust</li>
      <li>Zig</li>
      <li>Python</li>

      <h3>I am a graphic designer.</h3>
      <h3>I Love Remix ❤️</h3>
      <h3>I am a Typescript Mini Wizard 🚀</h3>
      <h3>I am Android Developer 📱</h3>
    </div>
  );
}
