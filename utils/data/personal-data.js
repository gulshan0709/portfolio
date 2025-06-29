const sendEmailTemplate = () => {
  const subject = `Hello from Portfolio`;
  const body = encodeURIComponent(`Hi there,\n\nI am Your Name and I wanted to get in touch regarding your portfolio.`);
  return `mailto:gulshansingh0709@gmail.com?subject=${subject}&body=${body}`;
};

export const personalData = {
  name: "Gulshan Kumar",
  profile: '/profile.png',
  designation: "Senior Software Developer",
  description: "Hi, I'm Gulshan Kumar, a Software Developer with 4 years of experience building scalable, user-friendly applications using JavaScript, React, Python, and Django. I’m passionate about writing clean, efficient code and transforming complex problems into simple, elegant solutions. I’ve worked on web apps, REST APIs, and advanced AI systems using facial recognition and data analysis. I thrive in collaborative environments, love learning new technologies, and am driven to deliver impactful, high-quality software.",
  email: 'gulshansingh0709@gmail.com',
  phone: '+91 8920658335',
  address: 'Sector-130, Noida, Uttar Pradesh, India 201304',
  github: 'https://github.com/gulshan0709',
  linkedIn: "https://www.linkedin.com/in/gulshan-kumar-b477481a0/",
  facebook: "https://www.facebook.com/gulshan.singh.907753",
  twitter: "https://x.com/gulshansingh071?t=y0Kut34cNgP4F2RV76pJrg&s=09",
  instagram: 'https://www.instagram.com/oye_its_gulshan?igsh=aXpucDNuM2xkY29u',
  devUsername: "gulshan0709",
  whatsapp: "https://api.whatsapp.com/send/?phone=%2B918920658335&text=Hello+Gulshan+I+found+your+contact+through+portfolio+site.%0A%0A",
  sendemailto: sendEmailTemplate(),
  resume: "https://drive.google.com/file/d/1NKwNFZke9h-b0jOAq1yC5XATsgY09uV2/view?usp=drive_link",
}

