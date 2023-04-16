import React from "react";
import office from "../assets/alesia-kazantceva-VWcPlbHglYc-unsplash.jpg";
import meeting from "../assets/pexels-christina-morillo-1181396.jpg";
import { FiCopy } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

export const Introduction = () => {
  return (
    <section className="text-center w-1/2 m-auto mt-10 mb-10">
      <p className="font-poppins text-justify">
        Lorem ipsum dolor sit amet. Aut rerum vero sit ipsum consequatur rem
        totam voluptatem aut odit sint. Eos quasi exercitationem ut similique
        beatae eos voluptatum magnam et laudantium rerum et fugiat excepturi.
        Eos deleniti quam ea sunt quis non quas eaque ad suscipit beatae aut
        omnis exercitationem.
      </p>
      <p className="border-t border-gray-300 mt-10 mb-10"></p>
      <h1 className="flex flex-start font-bold font-poppins">Introduction</h1>
      <p className="text-justify mt-5 font-poppins">
        Lorem ipsum dolor sit amet. Eos rerum rerum in nobis saepe qui rerum
        quia et placeat possimus. Et laborum accusantium est ipsa commodi ut
        quia rerum et quia molestias eos eveniet aliquid et beatae rerum. Qui
        dolores sunt eum nulla aperiam ut quos recusandae quo sunt explicabo qui
        dolores sunt eum ipsum ipsa!
      </p>
      <p className="text-justify mt-5 font-poppins">
        Ut illo nemo et voluptatem galisum et facilis quidem. Aut nihil amet ea
        esse rerum ut architecto magnam ea quisquam asperiores ut voluptate
        doloribus. Nam rerum incidunt est provident doloribus eum quaerat sint
        sed nesciunt deleniti qui quaerat quos vel accusantium tempora ut soluta
        quia.
      </p>

      <img className="mt-10 mb-10" src={office} alt="" />

      <div className="border-l-2 border-black">
        <p className="font-bold italic  font-poppins text-justify p-2">
          "In a world older and more complete that ours they moved finished and
          complete, gifted with extensions of the senses we have lost or never
          tried, living by voices we shall never hear."
        </p>

        <p className="text-justify p-2 font-poppins text-gray-800 font-semibold">
          - Olivia Rhye, Product Designer
        </p>
      </div>

      <div className="mt-10 text-justify font-poppins">
        <p className="">
          Lorem ipsum dolor sit amet. Vel iure dolorem non fuga earum ea
          voluptate quidem. Est assumenda recusandae a soluta porro et totam
          adipisci sit omnis nihil.
        </p>
        <p className="mt-5">
          Sit illo nihil aut voluptas quisquam qui natus rerum aut nulla aliquam
          ut aliquid aliquid ut error eligendi aut esse itaque? Et odio
          blanditiis est quos ipsum et autem sequi est earum dolor sit eveniet
          perspiciatis et totam veniam. Nam minus sequi aut corrupti rerum eos
          corporis quibusdam et omnis quia eos labore distinctio qui galisum
          incidunt?
        </p>
        <p className="mt-5">
          Et Quis harum ut perspiciatis maiores qui nemo enim. Sit odit pariatur
          id pariatur molestiae ut maxime velit non voluptas deserunt et dolorum
          atque. Rem consequuntur architecto hic modi consequatur eos omnis
          galisum.
        </p>
      </div>

      <div className="mt-10 font-poppins text-justify">
        <h1 className="font-bold">Software and Tools</h1>
        <p className="mt-5">
          Est quasi dolores vel optio consequatur aut veritatis accusamus ut
          incidunt dolorem hic unde cupiditate. Aut quisquam perspiciatis et
          quos facere aut ducimus pariatur. Aut minus corporis aut dolorum omnis
          et amet officia?
        </p>
      </div>

      <div className="mt-10 font-poppins text-justify">
        <h1 className="font-bold">Other Resources</h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet. Nam molestiae excepturi sit beatae totam
          ut debitis ipsum. Ad galisum repudiandae sit expedita laudantium non
          omnis voluptatem. Sed dolorem culpa eos velit commodi ut eius
          voluptatum est sunt quis At natus unde qui aspernatur esse et maxime
          ipsam. Et iure nesciunt est temporibus magni id dicta molestiae aut
          ducimus quaerat a debitis voluptates.
        </p>

        <ul className="mt-5">
          <li>
            1. Lorem ipsum dolor
            <span className="border-b border-black">sit amet.</span>
          </li>
          <li>
            2. Aut facilis
            <span className="border-b border-black"> odio sit nihil</span>{" "}
            galisum aut harum amet eum galisum nemo.
          </li>
          <li>
            3. Non dignissimos tempora
            <span className="border-b border-black"> ut neque</span> voluptatum
            ut fuga sint ut commodi voluptas.
          </li>
        </ul>
        <img className="mt-10" src={meeting} alt="" />

        <p className="mt-5">
          Vel placeat vitae et quis delectus qui ducimus similique qui aliquam
          tempore sed iusto laudantium. Ut exercitationem minima qui sapiente
          soluta ut impedit cupiditate aut maxime aliquam in excepturi magni!
          Qui voluptas consectetur a sint aliquam eum consequatur sint.
        </p>

        <p className="mt-5">
          Lorem ipsum dolor sit amet. Aut aliquam quae aut officiis odio id iste
          optio et possimus facilis et expedita accusantium et Quis quia. Eos
          adipisci culpa eum galisum rerum in modi expedita.
        </p>
      </div>

      <div className="font-poppins text-justify mt-10">
        <h1 className="font-bold">Conclusion</h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet. Qui animi ullam qui libero sint ut itaque
          dolor vel impedit molestiae. Et molestiae sequi aut aliquam deserunt
          non illo autem ex fugiat aspernatur et fugiat suscipit.
        </p>
        <p className="mt-5">
          Et nisi ipsum sed reprehenderit consequatur a excepturi officia eum
          cupiditate facere aut harum reprehenderit est iure voluptas. Aut
          incidunt soluta aut blanditiis inventore id doloribus numquam.
        </p>
        <p className="mt-5">
          Ex velit perspiciatis ut perferendis doloribus ut harum ratione id
          modi recusandae qui illum ducimus. Ut quia tempora eum consequatur
          natus et ipsam earum ea praesentium galisum et enim quia At velit
          excepturi.
        </p>
        <p className="mt-5">
          In earum neque eos asperiores ullam id cupiditate maiores aut quam
          enim.
        </p>
      </div>

      <div className="mt-10 lg:flex-row flex flex-row justify-between items-center">
        <ul className="lg:flex-row flex-col flex items-center">
          <li>
            <button className="border border-gray-400 rounded-full px-3 py-1 bg-slate-800 hover:bg-black text-white">
              Design
            </button>
          </li>
          <li>
            <button className="border border-gray-400 rounded-full px-3 py-1 ml-2 mr-2 mt-2 mb-2 bg-slate-800 hover:bg-black text-white">
              Tools
            </button>
          </li>
          <li>
            <button className="border border-gray-400 rounded-full px-3 py-1 bg-slate-800 hover:bg-black text-white">
              SaaS
            </button>
          </li>
        </ul>

        <ul className="lg:flex-row flex flex-col items-center">
          <li>
            <button className="flex items-center border border-gray-400 p-1 rounded-lg bg-slate-800 hover:bg-black text-white">
              <FiCopy /> Copy link
            </button>
          </li>
          <li>
            <button className="border border-gray-400 p-2 ml-2 mr-2 mt-2 mb-2 rounded-lg bg-slate-800 hover:bg-black text-white">
              <AiOutlineTwitter />
            </button>
          </li>
          <li>
            <button className="border border-gray-400 p-2 rounded-lg bg-slate-800 hover:bg-black text-white">
              <BsFacebook />
            </button>
          </li>
          <li>
            <button className="border border-gray-400 p-2 lg:ml-2 mt-2 lg:mt-0 rounded-lg bg-slate-800 hover:bg-black text-white">
              <AiFillLinkedin />
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};
