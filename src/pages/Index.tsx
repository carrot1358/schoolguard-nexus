import { Camera, ClipboardCheck, Users, Bell, BarChart3, FileEdit, MessageSquare, Calendar } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";
import { Particles } from "@/components/ui/particles";
import { BlurFade } from "@/components/ui/blur-fade";

// Feature Card Component - Large Version with Image
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  colorClass,
  gradientClass,
  index,
  isReversed = false
}: { 
  icon: any; 
  title: string; 
  description: string; 
  colorClass: string;
  gradientClass: string;
  index: number;
  isReversed?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}
    >
      {/* Image Container - Placeholder for isometric image */}
      <motion.div 
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? 50 : -50 }}
        transition={{ duration: 0.7, delay: index * 0.15 + 0.2 }}
        whileHover={{ scale: 1.05, rotate: isReversed ? -2 : 2 }}
      >
        <div className={`relative aspect-square rounded-3xl ${gradientClass} p-8 shadow-2xl border-4 ${colorClass} overflow-hidden`}>
          {/* Placeholder for isometric image */}
          <div className="w-full h-full flex items-center justify-center">
            <motion.div
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`w-32 h-32 rounded-3xl ${colorClass.replace('border-', 'bg-').replace('200', '400')} flex items-center justify-center`}
            >
              <Icon className={`${colorClass.replace('border-', 'text-').replace('200', '700')} w-20 h-20`} />
            </motion.div>
          </div>
          
          {/* Decorative elements */}
          <div className={`absolute top-0 right-0 w-40 h-40 ${colorClass.replace('border-', 'bg-').replace('200', '100')} rounded-full blur-3xl opacity-50`} />
          <div className={`absolute bottom-0 left-0 w-32 h-32 ${colorClass.replace('border-', 'bg-').replace('200', '200')} rounded-full blur-2xl opacity-50`} />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="w-full lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? -50 : 50 }}
        transition={{ duration: 0.7, delay: index * 0.15 + 0.3 }}
      >
        <motion.div 
          className={`inline-block p-4 ${colorClass.replace('border-', 'bg-').replace('200', '100')} rounded-2xl mb-6`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className={`${colorClass.replace('border-', 'text-').replace('200', '600')} w-12 h-12`} />
        </motion.div>
        <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  );
};

// Capability Card Component
const CapabilityCard = ({ 
  icon: Icon,
  title, 
  description,
  index 
}: { 
  icon: any;
  title: string; 
  description: string;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border border-white/50 min-w-[280px] md:min-w-0"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Role Section Component
const RoleSection = ({
  emoji,
  title,
  description,
  capabilities,
  gradient,
  isReversed = false,
}: {
  emoji: string;
  title: string;
  description: string;
  capabilities: Array<{ icon: any; title: string; description: string }>;
  gradient: string;
  isReversed?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className={`py-20 px-4 ${gradient} relative overflow-hidden`}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center mb-12`}>
          {/* Role Header */}
          <BlurFade delay={0.1} className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? 50 : -50 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <motion.div 
                className="text-8xl mb-6 inline-block"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {emoji}
              </motion.div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{title}</h2>
              <p className="text-lg text-gray-700">{description}</p>
            </motion.div>
          </BlurFade>

          {/* Capabilities Grid */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? -50 : 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="overflow-x-auto pb-4 -mx-4 px-4 lg:mx-0 lg:px-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-w-max md:min-w-0">
                {capabilities.map((cap, i) => (
                  <CapabilityCard key={i} {...cap} index={i} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Index() {
  const executiveCapabilities = [
    { icon: BarChart3, title: "รายงานสรุปทั้งโรงเรียน", description: "ภาพรวมข้อมูลนักเรียนทั้งหมดในที่เดียว" },
    { icon: BarChart3, title: "วิเคราะห์สถิติและแนวโน้ม", description: "กราฟและข้อมูลเชิงลึกเพื่อการตัดสินใจ" },
    { icon: FileEdit, title: "ตั้งค่าระบบคะแนนและเวลา", description: "ปรับแต่งกฎเกณฑ์ให้เหมาะกับโรงเรียน" },
    { icon: FileEdit, title: "ส่งออกรายงาน Excel/PDF", description: "ดาวน์โหลดรายงานเพื่อนำเสนอหรือเก็บไว้" },
  ];

  const teacherCapabilities = [
    { icon: ClipboardCheck, title: "เช็คแถวนักเรียน", description: "เช็คชื่อนักเรียนในห้องที่ดูแลได้ง่ายๆ" },
    { icon: FileEdit, title: "บันทึกการละเมิดระเบียบ", description: "บันทึกพฤติกรรมที่ไม่เหมาะสมพร้อมรูปภาพ" },
    { icon: ClipboardCheck, title: "เพิ่ม/หักคะแนนนักเรียน", description: "ให้คะแนนหรือหักคะแนนพร้อมระบุเหตุผล" },
    { icon: BarChart3, title: "ดูรายงานห้องเรียน", description: "ติดตามสถิติและประวัตินักเรียนในห้อง" },
  ];

  const parentCapabilities = [
    { icon: BarChart3, title: "ดูคะแนนความประพฤติ", description: "ติดตามคะแนนบุตรหลานแบบเรียลไทม์" },
    { icon: Calendar, title: "ดูประวัติการมาโรงเรียน", description: "ตรวจสอบเวลามาถึงและกลับบ้าน" },
    { icon: Bell, title: "รับแจ้งเตือนทันที", description: "แจ้งเตือนการมาสาย ขาด หรือละเมิดระเบียบ" },
    { icon: FileEdit, title: "ยื่นใบลาออนไลน์", description: "ส่งใบลาออนไลน์ผ่านระบบ LINE" },
  ];

  const studentCapabilities = [
    { icon: BarChart3, title: "ดูคะแนนความประพฤติ", description: "ตรวจสอบคะแนนของตนเองได้ตลอดเวลา" },
    { icon: Calendar, title: "ดูประวัติการเข้าโรงเรียน", description: "ดูเวลามาถึงและกลับบ้านย้อนหลัง" },
    { icon: FileEdit, title: "ดูรายละเอียดคะแนน", description: "ดูว่าถูกเพิ่ม/หักคะแนนเพราะอะไร" },
    { icon: MessageSquare, title: "ติดตามพฤติกรรม", description: "รับรู้และปรับปรุงพฤติกรรมตนเอง" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-yellow-50 to-violet-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-primary/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-xl shadow-lg">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  SchoolGuard
                </h1>
                <p className="text-xs text-muted-foreground">
                  โรงเรียนเทศบาลวัดกลาง
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 overflow-hidden">
        <Particles
          className="absolute inset-0 -z-10"
          quantity={100}
          staticity={50}
          color="#ec4899"
        />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <BlurFade delay={0.1}>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-primary/20 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-foreground">โรงเรียนเทศบาลวัดกลาง</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
                SchoolGuard
              </span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
              ระบบบริหารจัดการนักเรียนแบบครบวงจร
            </p>
          </BlurFade>

          <BlurFade delay={0.4}>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              ผสานระบบ Face Recognition, ระบบคะแนนความประพฤติ,
              และการแจ้งเตือนผู้ปกครองผ่าน LINE ในแพลตฟอร์มเดียว
            </p>
          </BlurFade>

          <BlurFade delay={0.5}>
            <ShimmerButton
              shimmerColor="rgba(6, 199, 85, 0.3)"
              shimmerSize="0.15em"
              background="#06C755"
              className="inline-flex items-center gap-3 text-white font-semibold py-4 px-8 text-lg shadow-lg"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              เริ่มใช้งานผ่าน LINE
            </ShimmerButton>
          </BlurFade>
        </div>
      </section>

      {/* Features Section - Large with Images */}
      <section className="py-32 px-4 bg-gradient-to-b from-white via-pink-50/30 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <BlurFade delay={0.1}>
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-block px-6 py-2 bg-primary/10 rounded-full mb-6"
              >
                <span className="text-primary font-semibold">✨ ระบบที่ครบครัน</span>
              </motion.div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                ฟีเจอร์หลัก
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                เทคโนโลยีล้ำสมัยที่ออกแบบมาเพื่อการบริหารจัดการโรงเรียนยุคใหม่
              </p>
            </div>
          </BlurFade>

          <div className="space-y-32">
            <FeatureCard
              icon={Camera}
              title="ตรวจจับอัตโนมัติ"
              description="ระบบ Face Recognition ที่ทันสมัย ตรวจจับการมาโรงเรียนของนักเรียนแบบเรียลไทม์ บันทึกเวลาเข้า-ออกอัตโนมัติ ลดภาระงานเอกสาร และเพิ่มความแม่นยำในการบันทึกข้อมูล"
              colorClass="border-pink-200"
              gradientClass="bg-gradient-to-br from-pink-50 to-pink-100"
              index={0}
            />
            <FeatureCard
              icon={ClipboardCheck}
              title="ระบบคะแนนความประพฤติ"
              description="จัดการคะแนนความประพฤตินักเรียนแบบดิจิทัล เพิ่มหรือหักคะแนนได้ทันที พร้อมระบบรายงานที่ครบถ้วน ช่วยให้ครูและผู้ปกครองติดตามพัฒนาการของนักเรียนได้อย่างมีประสิทธิภาพ"
              colorClass="border-yellow-200"
              gradientClass="bg-gradient-to-br from-yellow-50 to-yellow-100"
              index={1}
              isReversed
            />
            <FeatureCard
              icon={Users}
              title="เช็คแถวดิจิทัล"
              description="เช็คชื่อนักเรียนแบบดิจิทัล บันทึกการละเมิดระเบียบได้ทันที พร้อมถ่ายรูปประกอบ ทำให้การจัดการชั่วโมงเช้าและการตรวจเครื่องแบบเป็นเรื่องง่ายและรวดเร็ว"
              colorClass="border-violet-200"
              gradientClass="bg-gradient-to-br from-violet-50 to-violet-100"
              index={2}
            />
            <FeatureCard
              icon={Bell}
              title="แจ้งเตือนทันที"
              description="ระบบแจ้งเตือนอัตโนมัติผ่าน LINE ส่งข้อมูลการมาโรงเรียน คะแนนความประพฤติ และเหตุการณ์สำคัญถึงผู้ปกครองทันที สร้างความร่วมมือระหว่างโรงเรียนและบ้านอย่างมีประสิทธิภาพ"
              colorClass="border-pink-200"
              gradientClass="bg-gradient-to-br from-pink-50 to-pink-100"
              index={3}
              isReversed
            />
          </div>
        </div>
      </section>

      {/* Roles Sections */}
      <div className="space-y-0">
        <RoleSection
          emoji="👨‍💼"
          title="ผู้บริหาร"
          description="ภาพรวมและการควบคุมระบบทั้งหมด เพื่อการตัดสินใจที่มีประสิทธิภาพ"
          capabilities={executiveCapabilities}
          gradient="bg-gradient-to-br from-violet-100 via-violet-50 to-pink-50"
        />

        <RoleSection
          emoji="👨‍🏫"
          title="ครู"
          description="เครื่องมือสำหรับครูในการดูแลและบริหารจัดการนักเรียนประจำวัน"
          capabilities={teacherCapabilities}
          gradient="bg-gradient-to-br from-yellow-100 via-yellow-50 to-violet-50"
          isReversed
        />

        <RoleSection
          emoji="👨‍👩‍👧"
          title="ผู้ปกครอง"
          description="ติดตามดูแลบุตรหลานได้ทุกที่ทุกเวลา รับแจ้งเตือนทันทีเมื่อมีเหตุการณ์"
          capabilities={parentCapabilities}
          gradient="bg-gradient-to-br from-pink-100 via-pink-50 to-yellow-50"
        />

        <RoleSection
          emoji="🎓"
          title="นักเรียน"
          description="เข้าถึงข้อมูลส่วนตัว ติดตามคะแนนและพัฒนาตนเอง"
          capabilities={studentCapabilities}
          gradient="bg-gradient-to-br from-yellow-100 via-yellow-50 to-violet-50"
          isReversed
        />
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-primary/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade delay={0.1}>
            <div className="text-center space-y-2">
              <p className="text-gray-600">
                © 2025 <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SchoolGuard</span> - โรงเรียนเทศบาลวัดกลาง
              </p>
              <p className="text-sm text-muted-foreground">
                Developer: Nattapad Sa.
              </p>
            </div>
          </BlurFade>
        </div>
      </footer>
    </div>
  );
}
