import React from "react";

const About = () => {
  return (
    <div className="p-10">
      <h1 className="font-semibold text-4xl mb-6 text-center">About Us</h1>
      <div className=" text-center lg:px-48">
        <p>
          Welcome to SNISTeve! At SNISTeve, we are dedicated to enhancing the
          college experience for students at Sreenidhi Institute of Science and
          Technology (SNIST) through a comprehensive event management platform.
          Our goal is to streamline the process of organizing, managing, and
          participating in campus events, making it easier for students and
          organizers alike to connect and engage with the vibrant
          campus community.
        </p>
      </div>
      <div className="mx-20 my-10">
        {/* <div className="mb-5 lg:grid grid-cols-2 gap-6">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            excepturi non, omnis voluptatum eius id incidunt dolorum
            necessitatibus nostrum harum expedita doloribus sunt esse magnam
            consectetur optio magni quod illum. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Magnam beatae officia odit similique
            ducimus, iure consectetur, tempore atque aperiam id, commodi saepe
            minus aliquid laudantium optio! Aut, iste. Asperiores, quod.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            excepturi non, omnis voluptatum eius id incidunt dolorum
            necessitatibus nostrum harum expedita doloribus sunt esse magnam
            consectetur optio magni quod illum. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Exercitationem laboriosam ut ea cum
            molestiae tempore, nesciunt optio quod excepturi, error quas, eos
            hic animi voluptatem. Velit laudantium explicabo facere optio?
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            excepturi non, omnis voluptatum eius id incidunt dolorum
            necessitatibus nostrum harum expedita doloribus sunt esse magnam
            consectetur optio magni quod illum.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            excepturi non, omnis voluptatum eius id incidunt dolorum
            necessitatibus nostrum harum expedita doloribus sunt esse magnam
            consectetur optio magni quod illum.
          </div>
        </div> */}

        <h2 className="text-2xl font-semibold mb-5">Our Reach</h2>
        <div className="lg:flex justify-between mb-5 bg-pink-900 rounded-lg p-10 text-white">
          <div className="border-l-2">
            <h1 className="font-semibold text-3xl px-5">100+</h1>
            <p className="text-slate-200 px-5">Events offering</p>
          </div>
          <div className="border-l-2">
            <h1 className="font-semibold text-3xl px-5">150+</h1>
            <p className="text-slate-200 px-5">Volunteers</p>
          </div>
          <div className="border-l-2">
            <h1 className="font-semibold text-3xl px-5">250k</h1>
            <p className="text-slate-200 px-5">Participants</p>
          </div>
          <div className="border-l-2">
            <h1 className="font-semibold text-3xl px-5">1k+</h1>
            <p className="text-slate-200 px-5">Registrations</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-5">Our Missions</h2>
          <div>
            <div>
              <p className="mb-5">
                Our mission is to create a user-friendly, efficient, and secure
                platform that facilitates the organization and participation in
                college events.
                <br /> We strive to:
                <br /> Foster community engagement among students.
                <br /> Simplify event management for organizers.
                <br /> Provide a seamless and enjoyable
                experience for all users.
              </p>
              <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia, et at, quae dolor vitae sapiente porro, nihil esse
                adipisci sed obcaecati officiis quia earum debitis dicta animi
                facere quidem provident?
              </p>
              <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia, et at, quae dolor vitae sapiente porro, nihil esse
                adipisci sed obcaecati officiis quia earum debitis dicta animi
                facere quidem provident?
              </p>
            </div>
          </div>
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          We’d love to hear from you! If you have any questions, suggestions, or
          feedback, feel free to reach out to us.
          <br />
          Contact Address: SNISTeve Team Sreenidhi Institute of Science and
          Technology (SNIST) Yamnampet, Ghatkesar, Hyderabad, Telangana, India
          <br />
          Email: support@snistive.com
          <br />
          Phone: +91-XXXXXXXXXX
          <br />
          <br /> Follow us on our social media channels:
          <br /> Facebook: SNISTeve Facebook Page <br />
          Twitter: @SNISTeve <br />
          Instagram: @SNISTeve <br />
          LinkedIn: SNISTeve on LinkedIn <br /> Feel free to join our community
          and be part of the exciting happenings at SNIST!
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-semibold">Stay Connected</h2>
          <p>
            Follow us on social media, sign up for our newsletter, or reach out
            for more information. Stay updated with the latest event
            announcements, schedules, and exclusive opportunities from our
            College Event Management System.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
