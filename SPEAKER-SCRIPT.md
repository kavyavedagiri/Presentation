# Speaker script — 20 minutes

Present from `index.html`. Press **N** for on-screen notes, **T** to start the 20-minute timer, **F** for fullscreen. Speak in first person; the on-slide bullets are prompts, not a script to read aloud.

Approximate pace: unhurried British English, about 140 words per minute. Total target: **20 minutes**.

---

## 01 · Opening — 1 minute

**On screen:** “I like to understand a problem before I write the code.”

Hello. I’m Kavya, and I’m a software developer with a little over four years of technical experience. I thought it would be more useful to walk you through how I actually work than to recap a CV.

I started by building interfaces and experimenting with product ideas. Over time I took more ownership of complete product experiences, moved into backend engineering and Golang services, learned to work inside a structured delivery process, and later explored how AI capabilities could sit inside a SaaS product.

The thread through all of that is fairly simple. I try to understand the problem, look at a few ways it could be solved, and contribute beyond the immediate ticket.

**Transition:** Let me be precise about what is core experience, and what I only explored.

---

## 02 · How I work — 1 minute

I’m not going to present myself as an expert in every technology I’ve touched. That would be dishonest, and it wouldn’t help you hire me.

My strongest day-to-day experience is React, JavaScript, HTML and CSS, and building interfaces that have to work on real screens. I’ve done substantial Node.js and REST API work, including authentication and third-party integrations. Later I learned Golang and started writing backend services in a microservice environment.

Some things were investigations. The Next.js work was a proof of concept, not a completed migration. Pinecone and the MCP-related work were exploration around AI features. I will label those as I go.

What I am confident about is the way I work: ownership, adaptability, curiosity, and being able to move between the frontend and the backend when the problem needs it.

**Transition:** Here is that journey as four chapters, not as a pile of logos.

---

## 03 · Career overview — 45 seconds

First, small-team product work with a Singapore-based group: React experiments, then a university-related student platform.

Alongside that, a MERN application for Indian mutual funds, and a Next.js proof of concept when I started worrying about SEO.

Then Autonom8, a startup incubated at IISc. That is where the process became more structured, and where I moved into Golang and services.

Finally, AI-related work on a SaaS product: retrieval, prompting, and being careful about what I did versus what the platform already provided.

I’ll spend the time on the work that shows how I think.

**Transition:** The first chapter is a short contract, but it taught me something I still use.

---

## 04 · Early React and UX research — 1 minute 30 seconds

My first professional engineering work was a three-month contract, working closely with a Singapore-based team involved in QA and UX research. That was a useful way to start, because I was sitting next to the people who were testing ideas, not only the people writing code.

One experiment was a landing page, at a time when vertical video was becoming much more common. The question was practical: if the content people care about is vertical, how should the page use the screen?

I worked in React and helped turn that experiment into a working interface. I didn’t own the research programme, and I’m not going to invent a conversion number. What I learned was how a UX decision actually changes what you build — layout, media, and what you choose to put in front of someone first.

**Transition:** The same stakeholders then asked me to support a more ambitious university product.

---

## 05 · Student platform — 2 minutes 30 seconds

This application helped people visualise student information: notes, feedback, pending work, completed activity. The web app was responsive, with floating panels. Inside it there was an iframe containing a Three.js mesh. Individual students appeared as interactive dots. If you selected a dot, a profile view opened with that student’s information.

Operational Transformation was part of the application, which mattered for collaborative editing. I want to be clear: I did not independently write the Three.js engine or the OT implementation. My contribution was the web application and the experience around that visualisation.

The sequence I still think about is: you see an overview, you enter the mesh, you choose a student, and you land on information you can actually use. That is an interaction problem as much as a graphics problem.

The contract ended during COVID-19 because the company could not extend it. It was a practical constraint, and I treated it as the end of a chapter.

**Transition:** In parallel I was also contributing to a financial product, which pulled me much more into APIs and data.

---

## 06 · Mutual fund product — 2 minutes

This was a MERN-stack application for purchasing Indian mutual fund products. React on the frontend, Redux for state, Node.js on the backend, MongoDB for storage, JWT for authentication, and BSE APIs for the financial data we needed.

The pages were not a static brochure. Routes and views changed with the catalogue, the customer, and live product data. Search, filters, and portfolio views all depend on that.

The product served around ten thousand Indian and American customers, as I remember it. That is context for the product. It is not a number of users I personally acquired, and I didn’t own the entire platform.

What I gained was experience with customer and product data, authenticated API work, and application behaviour that has to stay coherent when the data keeps moving.

**Transition:** Working on that app is also when I started questioning the rendering model.

---

## 07 · Next.js proof of concept — 1 minute

A client-rendered React app is not always the most straightforward way to make content discoverable. I didn’t recommend a rewrite because Next.js was fashionable. I looked at how the existing application rendered, what would need to be server-rendered or pre-rendered, and whether Next.js was a reasonable path.

Then I built a proof of concept so we could see what a migration would actually involve. I did not complete a full production migration, and I am not claiming SEO improved.

The habit I care about is this: I don’t only finish the assigned task. If I can see a product constraint, I will investigate it properly before asking other people to change direction.

**Transition:** That same period also taught me what ownership looks like when the team is small.

---

## 08 · Small-team ownership — 1 minute

In those early projects, responsibilities were not neatly divided. Sometimes nobody handed me a finished design. I made the interface in HTML and CSS, explored Figma, chose icons, and produced assets in Canva.

I am not a professional UI designer. I don’t present that as a design career. What it taught me was how to work with limited resources: take an incomplete idea, make a credible interface, and ship something people can use.

That is also why the next job felt like a genuine change of environment, not just a new logo on a CV.

**Transition:** Autonom8 was that change.

---

## 09 · Structured engineering at Autonom8 — 1 minute

Autonom8 is a startup incubated at the Indian Institute of Science. Compared with the earlier work, this was a more structured engineering organisation, with platform, product, sales, and testing teams.

I worked in two-week sprints, with planning and user stories. Development was branch-based on GitLab, with peer reviews, Docker, and CI/CD into production. I collaborated with other developers and testers rather than carrying every concern myself.

I won’t invent team sizes or how often we deployed. The honest point is the working style. I learned why maintainable code, version control, and a repeatable release path matter once more than a few people depend on the software.

**Transition:** That environment is also where my work widened into Golang.

---

## 10 · Golang, services, and method — 4 minutes

I first used Node.js there because I already knew it. Then I learned Golang and started building backend services: REST APIs, microservice boundaries, schema design, and connecting those APIs back to the frontend. PostgreSQL and Redis were in the picture where a service actually needed them.

This felt like a natural widening of the same job. If the interface needed data, I wanted to understand how that data was modelled and served. I still think of myself as someone who started in the frontend, not as someone who abandoned it.

The process was never a rigid pipeline. I was not always given an API and a Figma file and asked to colour inside the lines. Depending on the problem, I might start by understanding the requirement and sketching a schema. I would often explore on my own, build a proof of concept, and notice UX details that were not in the original brief. Sometimes I proposed the interface and the behaviour before the API was final. I worked with the UX team when that was needed, and the frontend and backend evolved together.

So the loop looked more like: understand the problem, define the data, prove the uncertain part, think about the experience, shape the APIs, implement, integrate, and validate. In a startup that flexibility is useful, because ownership cannot wait for a perfect brief. I also don’t force every ticket through that sequence.

If you want a concrete picture, take a feature that needed new data. I would rather get the model honest first, then prove the interaction, then let the API and the UI meet, than pretend the backend contract arrived from heaven.

**Transition:** The same curiosity showed up when the product started talking about AI.

---

## 11 · AI integration — 2 minutes

I worked with the team on AI-related capabilities as those technologies were becoming practical to put into a SaaS product. The wider platform already had chatbot-style behaviour and customer-specific knowledge.

The conceptual flow was: a customer maintains a knowledge base; relevant pieces are retrieved for a question; prompts and an agent produce an answer that is actually about that customer. Pinecone was part of the retrieval exploration. It was not the language model, and it did not independently crawl and understand every document.

I also explored an MCP-related service or registry. I want to confirm the exact tool and whether it stayed a proof of concept. Until then, I treat it as investigation.

I did not build the entire AI platform, train a model, or create a vector database from scratch. What I can speak to is integration thinking: how an existing product might use retrieval and prompting without over-claiming the stack.

**Transition:** One last lesson, then I’ll tell you what I think I bring.

---

## 12 · Lessons and close — 3 minutes

In some early startup workflows, automated testing was limited, and issues sometimes appeared through manual checks or production feedback. I’m not criticising a former employer. Plenty of young products work that way. What I took from it is that quality has to be designed in — reviews, integration checks, and tests that match the risk — rather than hoped for after release. That is one reason GitLab, reviews, and CI/CD later felt like maturity, not bureaucracy.

If I put the whole journey in one sentence: I started by building interfaces and experimenting with product ideas. I gradually took ownership of complete product experiences, expanded into backend engineering and Golang microservices, learned to work within structured engineering workflows, and explored how AI capabilities could be integrated into SaaS products. Throughout, I have tried to understand the problem, investigate better solutions, and contribute beyond the task assigned to me.

What I bring to a team is that combination: strong frontend craft, full-stack product experience, growing backend skill, comfort with delivery process, and the habit of proving an idea before recommending it. I collaborate across frontend, backend, UX, and QA because that is how the work actually ships.

I want to keep contributing to problems that need careful thinking, not only careful syntax — and to do that with a team that ships.

I’m happy to go deeper on any of the systems I mentioned.

---

## If you are running long

Skip slide 08 (ownership) and fold one sentence into slide 09. Shorten slide 10 to the diagram plus the process loop. Keep the AI slide honest and brief.

## If you are running short

On slide 05, walk the four-step interaction slowly while pointing at the screenshot. On slide 06, show search then mention portfolio as “live customer state.” On slide 10, narrate one Autonom8 feature using the process loop, without inventing names if you cannot confirm them.
