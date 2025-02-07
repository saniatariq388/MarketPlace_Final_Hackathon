import { Card } from "@/components/ui/card";
import {
  Facebook,
  Twitter,
  Youtube,
  PinIcon as Pinterest,
  Link,
} from "lucide-react";
import Image from "next/image";
import { teamMembers } from "@/constant/teamMembers";

const SocialIcon = ({ Icon }: { Icon: any }) => (
  <div className="bg-gray-100 p-2 rounded hover:bg-[#195A00] group transition-colors duration-200">
    <Icon className="w-4 h-4 text-gray-600 group-hover:text-white" />
  </div>
);

export default function TeamMemberSection() {
  return (
    <section className="w-full bg-[#195A00]/85 py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 font-helvetica">
            Team Member
          </h2>
          <p className="text-white/90 max-w-md mx-auto font-inter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-white overflow-hidden group">
              <div className="relative">
                {/* yaha link ni hora our */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="w-full object-cover"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-100 group-hover:opacity-100 transition-opacity duration-200">
                  <SocialIcon Icon={Facebook} />
                  <SocialIcon Icon={Twitter} />
                  <SocialIcon Icon={Youtube} />
                  <SocialIcon Icon={Pinterest} />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-xl text-gray-700 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
