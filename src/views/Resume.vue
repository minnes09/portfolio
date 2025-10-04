<template>
  <div>
    <h1>Gabriele Minneci — Resume</h1>

    <div class="paragraph">
      <h2><strong>SOFTWARE ENGINEER</strong></h2>
      <div style="margin-top:3%;">
        Gameplay programmer with 6+ years in professional game development and solid experience in AAA production.
        Specialized in gameplay systems (3C, animation, tools), passionate about graphics and procedural technologies.
        Proven ability to bring features from prototype to shipping within cross-functional teams.
        Currently working at Ubisoft Milan as Mid Gameplay Programmer, contributing to multiple videogames. Previously worked at Zuru Tech Italy as Software Engineer, developing a UE4-based CAD/BIM product.
      </div>

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="#resume-pdf"><i class="fa fa-file-pdf-o fa-lg fa-fw"></i> View PDF</a>
        <a class="download-link" href="/d/resume.pdf" target="_blank" style="margin-left:12px;"><i class="fa fa-download fa-lg fa-fw"></i> Open / Download</a>
        <div style="clear:both"></div>
      </div>
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Skills</h2>
      <div class="skill-set">
        <h3>Technologies</h3>
        <SkillRate name="UE4/5" :rate="4" />
        <SkillRate name="Unity3D (2018)" :rate="3" />
        <SkillRate name="Snowdrop" :rate="4" />
        <SkillRate name="ARCore" :rate="2" />
        <SkillRate name="Vuforia" :rate="2" />
        <SkillRate name="Jira" :rate="4" />
        <SkillRate name="Perforce" :rate="5" />
        <SkillRate name="Git" :rate="5" />
        <SkillRate name="Microsoft Kinect 2" :rate="3" />
        <SkillRate name="Visual Studio" :rate="5" />
        <SkillRate name="Gitlab" :rate="4" />
      </div>

      <div class="skill-set">
        <h3>Programming Languages</h3>
        <SkillRate name="C++" :rate="4" />
        <SkillRate name="C#" :rate="3" />
        <SkillRate name="C" :rate="3" />
        <SkillRate name="Python" :rate="3" />
        <SkillRate name="WebGL" :rate="3" />
        <h3>Languages</h3>
        <SkillRate name="Italian (native)" :rate="5" />
        <SkillRate name="English (professional)" :rate="5" />
      </div>

      <div style="clear:both"></div>

      <div class="paragraph">
        <h2>Work Experience</h2>

        <h3>Mid Gameplay Programmer — Ubisoft Milano</h3>
        <h4>2024/06 – present</h4>
        <p><strong>Avatar: From the Ashes </strong>— from prototype to shipping</p>
        <ul>
          <li>Feature owner, inter-department co-coordinator for the features</li>
          <li>Boss battle 3C</li>
        </ul>

        <p><strong> Star wars Outlaws</strong></p>
        <ul>
          <li>Binocular system owner from L1 to shipping: multistreaming, FoV, memory optimization, LoDs</li>
          <li>Other features: 3C, animation, locomotion</li>
        </ul>

        <h3>Junior Gameplay Programmer — Ubisoft Milano</h3>
        <h4>2022/01 – 2024/05</h4>
        <p><strong>Mario+Rabbids Sparks of Hope and Star Wars Outlaws</strong></p>
        <p>Cross-department development of gameplay features. Ability to work on huge projects and deliver required features on time.</p>

        <h3>Mid Software Engineer — Zuru Tech Italy</h3>
        <h4>2021/07 – 2021/12</h4>
        <p>Developed UE4 based CAD/BIM product, refactored architecture, procedural mesh tools.</p>

        <h3>Junior Software Engineer — Zuru Tech Italy</h3>
        <h4>2019/04 – 2021/06</h4>

        <h3>Collaborator for M.Sc. thesis — Fraunhofer Italia</h3>
        <h4>2018/04 – 2018/08</h4>
        <p>Android Mixed Reality Application for buildings: indoor localization (Google ARCore, Unity, Computer Vision)</p>
      </div>

      <div class="paragraph">
        <h2>Projects & Research</h2>
        <ul>
          <li>Marble Garden — videogame (unpublished) 2019/07 – 2020/12</li>
          <li>Master Thesis — AR localization with Unity & ARCore (Fraunhofer) — Apr 2018 – Oct 2018</li>
          <li>Bachelor Thesis — Gaze estimation with Kinect v2 — Mar 2016 – Jul 2016</li>
          <li>Procedural objects — Procedural planets and Infinite terrain generation (UE4 and noise algorithms) — personal projects</li>
        </ul>
      </div>

      <div class="paragraph">
        <h3>Certificates</h3>
        <div>Italian qualification to practice the profession of Informatics Engineer</div>
      </div>

      <div class="paragraph">
        <h2>Education</h2>
        <p>M.Sc. in Computer Science: Software Engineering & IT Management — Free University of Bolzano — 109/110 (2016/10 – 2018/10)</p>
        <p>B.Sc. in Informatic Engineering — University of Florence — 96/110 (2011/10 – 2016/07)</p>
        <p>High School Diploma, Liceo Scientifico Guido Castelnuovo (2006 – 2011)</p>
      </div>

      <div class="paragraph">
        <h2>Interests</h2>
        <ul>
          <li>Videogames</li>
          <li>Software Engineering, Graphics & Procedural Programming</li>
          <li>3D Math, AR/VR/XR</li>
        </ul>
      </div>

      <div class="paragraph">
        <h2>Leisure Time</h2>
        <p>
          I mainly play videogames; they are my passion and I love going in other worlds with them. I like being in nature, feel it and understand it: a good walking heals me in many ways. I’m a curious person, I want to understand the world more and more! I am a good listener and I try to learn from anyone I meet. I love technology and I follow how it continuously improves, I discuss about the new inventions and how they can be used, from ethical to practical. I improve my programming skills in the free time, following the latest updates from C++ and GDC.
        </p>
      </div>
    </div>

    <div style="clear:both"></div>
    <div id="resume-pdf" class="pdf-embed-wrapper">
      <h2 style="margin-bottom: 3%;">Resume (PDF)</h2>
      <object class="pdf-embed" data="/d/resume.pdf" type="application/pdf">
        <p>Your browser does not support PDFs. You can <a href="/d/resume.pdf" target="_blank">download the PDF</a> instead.</p>
      </object>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 900px;
  margin-bottom: 20px;
}

.download-link {
  float: left;
  margin-right: 50px;
}

.full-content div {
  max-width: 900px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

.pdf-embed-wrapper {
  margin-top: 3%;
}
.pdf-embed {
  width: 100%;
  min-height: 700px;
  border: 1px solid #ddd;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px;
  }
}
</style>