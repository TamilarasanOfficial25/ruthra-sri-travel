export interface TeamProfile {
  id: string;
  name: string;
  designation: 'Founder & Owner' | 'Senior Driver' | 'Junior Driver';
  experience: string;
  phone: string;
  completedTrips: string;
  introduction: string;
  image: string;
  imageAlt: string;
}

interface OwnerProfile extends TeamProfile {
  designation: 'Founder & Owner';
  foundedYear: number;
}

type DriverProfile = TeamProfile & {
  designation: 'Senior Driver' | 'Junior Driver';
};

function createDriver(
  id: string,
  name: string,
  designation: DriverProfile['designation'],
  experience: string,
  image: string,
): DriverProfile {
  return {
    id,
    name,
    designation,
    experience,
    phone: '',
    completedTrips: '',
    introduction: '',
    image,
    imageAlt: `Temporary stock portrait placeholder for ${name}; replace with the actual team member's photo`,
  };
}

export const teamData: {
  owner: OwnerProfile;
  seniorDrivers: DriverProfile[];
  juniorDrivers: DriverProfile[];
} = {
  owner: {
    id: 'owner',
    name: 'Jayabalam S',
    designation: 'Founder & Owner',
    experience: '15+ Years',
    foundedYear: 2020,
    phone: '',
    completedTrips: '',
    introduction: 'Founder of Ruthrasri Travels, established in 2020.',
    image: '/images/team/ruthrasri-team-owner-placeholder.jpg',
    imageAlt: "Temporary stock portrait placeholder for Jayabalam S; replace with the founder's actual photo",
  },
  seniorDrivers: [
    createDriver(
      'senior-driver-1',
      'Hariharan',
      'Senior Driver',
      '15+ Years',
      '/images/team/ruthrasri-team-senior-driver-1-placeholder.jpg',
    ),
    createDriver(
      'senior-driver-2',
      'Ram M',
      'Senior Driver',
      '10+ Years',
      '/images/team/ruthrasri-team-senior-driver-2-placeholder.jpg',
    ),
    createDriver(
      'senior-driver-3',
      'Pandiyan R',
      'Senior Driver',
      '7+ Years',
      '/images/team/ruthrasri-team-senior-driver-3-placeholder.jpg',
    ),
  ],
  juniorDrivers: [
    createDriver(
      'junior-driver-1',
      'Kumaran',
      'Junior Driver',
      '5+ Years',
      '/images/team/ruthrasri-team-junior-driver-1-placeholder.jpg',
    ),
    createDriver(
      'junior-driver-2',
      'Tamilarasan M',
      'Junior Driver',
      '5+ Years',
      '/images/team/ruthrasri-team-junior-driver-2-placeholder.jpg',
    ),
  ],
};

export const teamMembers = [
  teamData.owner,
  ...teamData.seniorDrivers,
  ...teamData.juniorDrivers,
];
