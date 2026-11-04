import { Phone } from 'lucide-react';
import { teamData } from '../../../data/teamMembers';
import type { TeamProfile } from '../../../data/teamMembers';

function getPhoneHref(phone: string) {
  const phoneNumber = phone.replace(/[^\d+]/g, '');
  return phoneNumber.replace(/\D/g, '').length >= 7 ? `tel:${phoneNumber}` : undefined;
}

function ProfileImage({ member, prominent = false }: { member: TeamProfile; prominent?: boolean }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-[#E2E8F0] ${prominent ? 'aspect-[4/3] md:aspect-[5/4]' : 'aspect-[4/3]'}`}>
      <img
        src={member.image}
        alt={member.imageAlt}
        width="720"
        height="960"
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[#475569] shadow-sm">
        Temporary photo
      </span>
    </div>
  );
}

function ProfileDetails({ member, owner = false }: { member: TeamProfile; owner?: boolean }) {
  const phoneHref = getPhoneHref(member.phone);
  const introduction = member.introduction || 'Introduction can be added here.';

  return (
    <div className="flex flex-col justify-center py-2 md:py-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86B08]">{member.designation}</p>
      <h3 className={`mt-2 font-['Playfair_Display'] leading-tight text-[#173746] ${owner ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>
        {member.name}
      </h3>
      <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#FFF4E4] px-4 py-2 text-sm font-semibold text-[#9A5B0A]">
        <span className="text-xs font-medium uppercase tracking-[0.12em] text-[#B86B08]">Experience</span>
        <span>{member.experience}</span>
      </div>
      {owner ? (
        <p className="mt-4 text-sm font-medium text-[#475569]">
          Founded in <span className="text-[#173746]">{teamData.owner.foundedYear}</span>
        </p>
      ) : null}
      <p className="mt-5 max-w-xl text-sm leading-7 text-[#475569]">{introduction}</p>

      <dl className="mt-5 grid gap-3 border-t border-[#E2E8F0] pt-5 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-[#64748B]">Contact</dt>
          <dd className="mt-1 break-words font-medium text-[#173746]">{member.phone || 'Add contact number'}</dd>
        </div>
        <div>
          <dt className="text-[#64748B]">Completed trips</dt>
          <dd className="mt-1 font-medium text-[#173746]">{member.completedTrips || 'Add completed trips'}</dd>
        </div>
      </dl>

      {phoneHref ? (
        <a
          href={phoneHref}
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-xl bg-[#E99A24] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#D98212]"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
      ) : null}
    </div>
  );
}

function DriverProfile({ member, reverse }: { member: TeamProfile; reverse: boolean }) {
  return (
    <article className="grid items-center gap-6 py-8 md:grid-cols-2 md:gap-10 md:py-12">
      <div className={reverse ? 'md:order-2' : 'md:order-1'}>
        <ProfileImage member={member} />
      </div>
      <div className={reverse ? 'md:order-1' : 'md:order-2'}>
        <ProfileDetails member={member} />
      </div>
    </article>
  );
}

export function OurTeam() {
  const drivers = [...teamData.seniorDrivers, ...teamData.juniorDrivers];

  return (
    <section id="team" data-reveal className="bg-[#F8FAFC] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#B86B08]">Our Team</p>
          <h2 className="font-['Playfair_Display'] text-3xl leading-tight text-[#173746] sm:text-4xl md:text-5xl">
            Meet the People Behind Ruthrasri Travels
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#475569] sm:text-base">
            Behind every comfortable journey is a dedicated team of experienced professionals. Our founder and drivers work together to provide safe, reliable and comfortable travel experiences.
          </p>
          <p className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-medium text-[#173746]">
            <span className="h-2 w-2 rounded-full bg-[#E99A24]" aria-hidden="true" />
            Founded in {teamData.owner.foundedYear}
          </p>
        </header>

        <article className="mt-12 grid items-center gap-6 rounded-[28px] border border-[#E2E8F0] bg-white p-5 shadow-[0_12px_36px_rgba(23,55,70,0.07)] sm:p-8 md:grid-cols-2 md:gap-10 md:p-10">
          <ProfileImage member={teamData.owner} prominent />
          <ProfileDetails member={teamData.owner} owner />
        </article>

        <div className="mt-12 border-t border-[#E2E8F0]">
          <div className="py-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B86B08]">Our Drivers</p>
            <h3 className="mt-2 font-['Playfair_Display'] text-2xl text-[#173746] sm:text-3xl">Experienced on every journey</h3>
          </div>
          {drivers.map((member, index) => (
            <div key={member.id} className="border-t border-[#E2E8F0]">
              <DriverProfile member={member} reverse={index % 2 === 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
