import ProjectData from '@/data/ProjectData'

export default [
    new ProjectData("project-1", "Avatar: From the Ashes", "img/projects/avatar.jpg", 
    `
    <div class="paragraph">
     <strong>Avatar: From the Ashes</strong> Last expansion in the beautiful world of Pandora. Current project as a gameplay programmer in Ubisoft Milan
    </div>
    <div class="paragraph center">
    <iframe class="youtube" src="https://www.youtube-nocookie.com/embed/24Lc7E-Vt80" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <a href="https://www.ubisoft.com/en-gb/game/avatar/frontiers-of-pandora" target="_blank">See on Ubisoft website</a>
    </div>

    <div class="paragraph">
        My contributions, this project is still in development so I cannot say much more :
        <ul>
        <li>Feature owner of a functionality in main game and expansion: gameplay, animation</li>
        <li>co-coordinator of multiple features</li>
        <li>Feature owner of a specific expansion feature</li>
        <li>3C of a boss battle</li>
        </ul>
    </div>
<!--
    <div class="paragraph center">
        <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Optimistic Chubby Screenshot" />
        <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Optimistic Chubby Screenshot" />
    </div>
-->
    `, "#23bd69", false),
    new ProjectData("project-2", "Star wars Outlaws", "img/projects/star-wars-outlaws.jpeg", `
    <div class="paragraph">
        <strong>Star wars outlaws</strong> Open world in the Star wars universe, what a journey! Worked as gameplay programmer in Ubisoft Milan
    </div>
    <div class="paragraph center">
    <iframe class="youtube" src="https://www.youtube-nocookie.com/embed/HlfuN4yj3yg" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph center">
        <a href="https://www.ubisoft.com/en-us/game/star-wars/outlaws" target="_blank">See on Ubisoft website</a>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>
            Binocular owner
            <ul>
                <li>Multistreaming in open world environments (LoDs, memory management)</li>
                <li>Field of view management and lens effects</li>
            </ul>
        </li>
        <li>Tagging system with the binoculars</li>
        <li>support on grappling hook 3C and animation</li>
        <li>Locomotion and animation</li>
        </ul>
    </div>

    <div class="paragraph center">

    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    </div>
    `, "#ad3700ff"),
    new ProjectData("project-3", "Mario + Rabbids Sparks of Hope", "img/projects/mrsh.png", `
    <div class="paragraph">
        <strong>Mario + Rabbids Sparks of Hope</strong> A tactical RPG in the Mario universe, what a ride! Worked as junior gameplay programmer in Ubisoft Milan. I contributed to the main game and the 3 DLCs. The only 3rd party game in the Mario universe.
    </div>
    <div class="paragraph center">
    <iframe class="youtube" src="https://www.youtube-nocookie.com/embed/PKch2n9X3jI" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph center">
        <a href="https://www.ubisoft.com/it-it/game/mario-rabbids/sparks-of-hope" target="_blank">See on Ubisoft website</a>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Abilities availability and UX feedback</li>
        <li>support on combat abilities</li>
        <li>support on DLC1 Tower of Doom reward system</li>
        <li>owner of DLC2 The last Spark Hunter Golem archetype</li>
        <li>combat abilities of Rayman in DLC3</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="/img/projects/tower-of-doom.png" alt="Tower of Doom" />
        <img class="pc-screenshot" src="/img/projects/last-spark-hunter.jpg" alt="The last Spark Hunter" />    
        <img class="pc-screenshot" src="/img/projects/rayman.png" alt="Rayman in the Phantom Show" />
    </div>
    `, "#c80000ff"),
   /* new ProjectData("project-4", "Eugeneable", "img/projects/project-4-icon.png", `
    <div class="paragraph">
    <strong>Eugeneable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
    <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@neo8iam">NEOSiAM 2020</a>.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
    </div>
    `, "#e80fb7"),
    new ProjectData("project-5", "Cloud Drew Land", "img/projects/project-5-icon.png", `
    <div class="paragraph">
        <strong>Cloud Drew Land</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@cottonbro">cottonbro</a>.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
    </div>`, "#e48246")
    */
];