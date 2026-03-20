import profileImg from "@/assets/edfs.jpeg";

import {
  User, Calendar, Ruler, Weight, Droplets, Heart, MapPin, Home,
  GraduationCap, Briefcase, Sparkles, Users, Phone, Star, BookOpen
} from "lucide-react";

const SectionHeading = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
  <div className="cv-section-heading">
    <Icon className="w-4 h-4 text-cv-icon" />
    <span>{title}</span>
  </div>
);

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="cv-detail-row">
    <span className="cv-detail-label">{label}</span>
    <span className="cv-detail-value">{value}</span>
  </div>
);

const Divider = () => <div className="cv-divider" />;

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-[900px] bg-card rounded-2xl border-2 border-cv-border shadow-[0_8px_40px_-12px_hsl(152,30%,70%,0.3)] overflow-hidden">
        {/* Header */}
        <div className="bg-cv-subtle px-8 pt-8 pb-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="flex-1 text-center sm:text-left order-2 sm:order-1">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground" style={{ fontFamily: 'var(--font-heading)' }}>
              SHAILA AKTER
              <span className="block text-primary">ASHA</span>
            </h1>
            <p className="mt-2 text-sm text-muted-foreground max-w-md leading-relaxed">
              A dedicated and compassionate physiotherapy student with strong academic performance. Passionate about patient care, rehabilitation, and improving quality of life through modern therapeutic techniques.
            </p>
          </div>
          <div className="order-1 sm:order-2 flex-shrink-0">
            <div className="w-36 h-36 rounded-full border-4 border-cv-border shadow-lg overflow-hidden bg-muted">
              <img src={profileImg} alt="Shaila Akter Asha" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>

        {/* Body - Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left Column */}
          <div className="p-8 border-r-0 md:border-r border-cv-divider">
            <SectionHeading icon={User} title="Personal Details" />
            <DetailRow label="Date of Birth" value="16 September 2002" />
            <DetailRow label="Age" value="23 years" />
            <DetailRow label="Height" value="4'10&quot;" />
            <DetailRow label="Weight" value="40 kg" />
            <DetailRow label="Blood Group" value="B+" />
            <DetailRow label="Religion" value="Islam" />
            <DetailRow label="Marital Status" value="Single" />
            <DetailRow label="Father's Name" value="MD. Anwar Hossain" />
            <DetailRow label="Mother's Name" value="Hamida Begum" />

            <Divider />

            <SectionHeading icon={MapPin} title="Address" />
            <DetailRow label="Permanent" value="Sardagonj, Kashempur, Gazipur" />
            <DetailRow label="Current" value="Sardagonj, Kashempur, Gazipur" />
            <DetailRow label="Home Town" value="Tarotia, Delduyar, Tangail" />

            <Divider />

            <SectionHeading icon={GraduationCap} title="Educational Background" />
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium text-foreground">BSc in Physiotherapy <span className="text-primary text-xs font-semibold">(Running — 3rd Year)</span></p>
                <p className="text-muted-foreground text-xs">Centre for the Rehabilitation of the Paralysed (CRP), Savar</p>
              </div>
              <div>
                <p className="font-medium text-foreground">HSC — GPA 5.00 <span className="text-muted-foreground text-xs">(2019–2021)</span></p>
                <p className="text-muted-foreground text-xs">Savar Government College</p>
              </div>
              <div>
                <p className="font-medium text-foreground">SSC — GPA 5.00 <span className="text-muted-foreground text-xs">(2016–2017)</span></p>
                <p className="text-muted-foreground text-xs">Glorious Model School and College, Gazipur</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="p-8">
            <SectionHeading icon={Sparkles} title="Hobbies & Interests" />
            <ul className="text-sm space-y-1.5 text-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                Helping people through healthcare
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                Learning new medical techniques
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                Traveling and exploring new places
              </li>
            </ul>

            <Divider />

            <SectionHeading icon={Users} title="Family Details" />
            <DetailRow label="Father" value="Businessman" />
            <DetailRow label="Mother" value="Homemaker" />

            <Divider />

            <SectionHeading icon={Heart} title="Preferred Life Partner" />
            <p className="text-sm text-foreground leading-relaxed">
              An educated, well-mannered, and family-oriented individual. A religious person who maintains regular prayers and knows and  follows Islamic principles in daily life. Should be caring, responsible, and supportive, with a mindset of building a peaceful and respectful family together.
            </p>

            <Divider />

            <SectionHeading icon={Phone} title="Contact Details" />
            <DetailRow label="Phone" value="01706-282480" />

            <Divider />

            
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Index;
