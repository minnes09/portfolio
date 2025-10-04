import ProjectData from '@/data/ProjectData'

export default [
  new ProjectData("project-6", "Procedural planets", "img/projects/proc-planets.png", `
  <div class="paragraph">
    <strong>Procedural planets</strong> is a personal project about spherical worlds generation for Unreal Engine 4 and 5.
  </div>

  <div class="paragraph">
    Main features :
    <ul>
      <li>Procedural generation of spherical heightmaps</li>
      <li>Noise algorithms based on Perlin noise</li>
      <li>Unreal shaders based on 3D height</li>
      <li>And then some</li>
    </ul>
  </div>
  <div class="paragraph">
    <div class="notice">
    Source code available on <a href="https://gitlab.com/minnes/proceduralplanet" target="_blank">GitLab</a>.
    </div>
    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/proc-planets.png" alt="Procedural planets" />
    <img class="pc-screenshot" src="img/projects/proc-water-planets.png" alt="planets water" />
    </div>
  </div>
  `, "#0699c1ff", false, false),
  new ProjectData("project-7", "Shroomies", "img/projects/shroomies.png", `
  <div class="paragraph">
        <strong>Shroomies</strong> Global Game Jam 2023 in the Turin hub. Made in 48h with a team of 12 people.
      </div>
<div class="paragraph center">
    <iframe class="youtube" src="https://youtu.be/PY2ClC3uFak" frameborder="0" allowfullscreen></iframe>
  </div>
      <div class="paragraph">
        Main features :
        <ul>
        <li>Locomotion on top of a 3D sphere</li>
        <li>3Cs</li>
        </ul>
      </div>

      <div class="paragraph">
        <div class="notice">
        You can download and try the game for free at <a href="https://v3.globalgamejam.org/2023/games/shroomies-8" target="_blank">the Global Game Jam website</a>
        You can find the source code on <a href="https://gitlab.com/Faust91/goodgamejami.git" target="_blank">GitLab</a>.
        </div>
      </div>
`, "#13358cff", false, true),
  new ProjectData("project-8", "Marble Garden", "img/projects/marble-garden.png", `
  <div class="paragraph">
        <strong>Marble Garden</strong> was an indie game developed in the free time with talented people. It never saw the light.
        I was one of the two programmers. I mainly worked on Equipment and items, level loadings and quests creation
      </div>

      <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/watch?v=Mm_yN947eYM" frameborder="0" allowfullscreen></iframe>
      </div>
  </div>`, "#237062ff"),
  new ProjectData("project-9", "Procedural Landscape", "img/projects/ProceduralGame.png", `
   <div class="paragraph">
        With <strong>Procedural Landscape</strong> 
        I explored an infinite world creation, where I experimented with procedural generation of terrain.
      </div>
      <div class="paragraph center">
        <iframe class="youtube" src="https://youtu.be/b3NocuU622A" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="paragraph">
    Main features :
    <ul>
    <li>Map chunks</li>
    <li>Multiple height generation algorithms</li>
    <li>Shaders and materials based on the height</li>
    <li>Multithreading operations with meshes manipulation</li>
    <li>Basic LOD implementation from scratch</li>
    </ul>
  </div>

      <div class="paragraph">
        <div class="notice">
        Source code available on <a href="https://gitlab.com/minnes/proceduralterrain" target="_blank">GitLab</a>.
        </div>
      </div>`, "#4f7b45ff",false, true),
];