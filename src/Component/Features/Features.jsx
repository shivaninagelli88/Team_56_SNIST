import React from "react";
import EasyRegistration from "../../assests/easy_registration.png";
import Reminders from "../../assests/reminders.png";
import Networking from "../../assests/networking.png";
import Insights from "../../assests/insights.png";

const Features = () => {
  return (
    <div className="p-10 bg-slate-400">
      <div className="lg:flex justify-center items-center gap-12 py-10">
        <div className="max-w-sm mb-10 rounded overflow-hidden">
          <div className="overflow-hidden flex justify-center">
            <img src={EasyRegistration} alt="Easy Registration" className="w-20" />
          </div>
          <div className="px-6 py-4">
            <div className="font-semibold text-lg mb-2 text-center">
              Easy Registration
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center">
              <span className="text-sm text-center text-pink-900">
                Students can quickly register for events online, saving time and
                making participation hassle-free.
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-sm mb-10 rounded overflow-hidden">
          <div className="overflow-hidden flex justify-center">
            <img src={Reminders} alt="Reminders" className="w-20" />
          </div>
          <div className="px-6 py-4">
            <div className="font-semibold text-lg mb-2 text-center">Automated Reminders</div>
            <div className="px-6 pt-4 pb-2 flex justify-center">
              <span className="text-sm text-center text-pink-900">
                Stay updated with notifications and reminders, ensuring you
                never miss an event deadline or important update.
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-sm mb-10 rounded overflow-hidden">
          <div className="overflow-hidden flex justify-center">
            <img src={Networking} alt="Networking" className="w-20" />
          </div>
          <div className="px-6 py-4">
            <div className="font-semibold text-lg mb-2 text-center">
              Enhanced Networking
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center">
              <span className="text-sm text-center text-pink-900">
                Meet peers, connect with mentors, and build lasting professional
                relationships at various events.
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-sm mb-10 rounded overflow-hidden">
          <div className="overflow-hidden flex justify-center">
            <img src={Insights} alt="Insights" className="w-20" />
          </div>
          <div className="px-6 py-4">
            <div className="font-semibold text-lg mb-2 text-center">
              Event Insights & Feedback
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center">
              <span className="text-sm text-center text-pink-900">
                Access valuable insights and feedback from past events to
                improve future experiences and make data-driven decisions.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
