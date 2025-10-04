<template>
  <div>
      <h1>Hello! I'm Gabriele Minneci</h1>

      <div class="paragraph">
        <div>
        I am a gameplay programmer with 6+ years of professional experience with strong experience in AAA development, but also indie dev. 
        Specialized in gameplay (3C, animation, tools) and passionate about graphics and procedural generation.
        </div>

        <div style="margin-top: 20px;"> I currently work at Ubisoft Milan as Gameplay Programmer, where I contribute in multiple videogames. </div>
      </div>

      <div style="clear:both"></div>

    
    <h1 class="center-div">Videogames</h1>
    <div class="projects-div">
      <h3>Ubisoft</h3>
      
      <ProjectsList v-bind:projects="projects" />

    </div>
    <div class="projects-div">
      <div>
        <h2>Personal projects</h2>
      </div>
      
      <ProjectsList v-bind:projects="otherprojects" />

    </div>
<!-- Contact Section -->
    <div>
    
    <h3 style="text-align: center;">Let's get in touch</h3>

  <ul class="contact-list">
      <li>
        <a href="mailto:gabriele.minneci@gmail.com" target="_blank">
          <i class="fa fa-envelope-o fa-lg fa-fw"></i>
          e-mail
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/gabriele-minneci/" target="_blank">
          <i class="fa fa-linkedin fa-lg fa-fw"></i>
          linkedin
        </a>
      </li>
      <li>
        <a href="https://gitlab.com/minnes/" target="_blank">
          <i class="fa fa-gitlab fa-lg fa-fw"></i>
          gitlab
        </a>
      </li>
            <li>
        <a href="https://www.mobygames.com/person/1348102/gabriele-minneci/" target="_blank">
            <i class="fa fa-gamepad fa-lg fa-fw"></i>
          mobygames
        </a>
      </li>
    </ul>

  </div>
  </div>

</template>

<style scoped>
.paragraph {
  max-width: 900px;
  margin-bottom: 20px;
}
.center-div {
  margin-top: 5%;
  width: 80%; /* or any width */
}
.projects-div{
  width: 100%;
  padding-top: 10px;
  padding-bottom: 5%;
}
.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

/* Contact list: horizontal layout */
.contact-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px; /* row-gap column-gap */
  list-style: none;
  padding: 0;
  margin: 10px 0;
  align-items: center;
  justify-content: center;  
}
.contact-list li {
  display: flex;
  align-items: center;
}
.contact-list a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: inherit;
}
.contact-list i {
  width: 26px;
  color: #fff !important; /* always white */
  text-align: center;
}

/* Hover/focus: change both icon and text color together */
.contact-list a:hover,
.contact-list a:focus {
  color: var(--hover-color, #d2d2d2); /* use CSS variable or fallback */
}
.contact-list a:hover i,
.contact-list a:focus i {
  color: currentColor; /* icon follows the anchor color on hover */
}

</style>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData";
import otherProjectsData from "@/data/OtherProjectsData";

export default Vue.extend({
  name: "About",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
      otherprojects: otherProjectsData,
    };
  },
});
</script>
