import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const TeamCard1 = ({ name, role, grade, school, major, imageSrc }: { name: string; role: string; grade: string; school: string; major: string; imageSrc: string }) => (
  <div className="text-center max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden text-center p-6 space-y-3">
    <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4 border-4 border-green-700">
      <Image
        src={imageSrc}
        alt={name}
        fill
        className="object-cover"
      />
    </div>
    
    <div className="w-72 mx-auto"> {/* Fixed width and centered */}
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-green-700">{role}</p>
      {grade && grade !== "null" && <p className="text-green-700">{grade}</p>}
      {major && major !== "null" && <p className="text-green-700">{major}</p>}
      {school && school !== "null" && <p className="text-green-700">{school}</p>}
    </div>
  </div>
)
const TeamCard = ({ name, role, grade, major, imageSrc }: { name: string; role: string; grade: string; major: string; imageSrc: string }) => (

<Card className="bg-white border-green-200">
<CardHeader className="pb-2">
  <CardTitle className="flex items-center gap-2">
    <div className="relative h-48 w-48 mx-auto rounded-full overflow-hidden mb-4 border-green-700">
      <Image
        src={imageSrc}
        alt={name}
        fill
        className="object-cover"
      />
    </div>
  </CardTitle>
</CardHeader>
<CardContent>
  <div className="w-72 mx-auto"> {/* Fixed width and centered */}
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-green-700">{role}</p>
    {grade && grade !== "null" && <p className="text-green-700">{grade}</p>}
    {major && major !== "null" && <p className="text-green-700">{major}</p>}
  </div>
</CardContent>
</Card>
)


export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image src="/images/banana4.jpg?height=400&width=1200" alt="DMT Acres Farm" fill className="object-cover" />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About DMT Acres</h1>
          <p className="mx-auto max-w-[700px] mt-4 text-lg text-gray-200">
            Learn about our journey, mission, and commitment to sustainable agriculture
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter">Who We Are</h2>
              <p className="text-gray-600">
                DMT Acres is a registered and dynamic farming enterprise based in Ntcheu and Kasungu Districts, Malawi. Founded in
                2019, this agriculture farming enterprise was officially registered in April 2024, specializing in
                poultry farming, crop production and organic fertilizer manufacturing.
              </p>
              <p className="text-gray-600">
                Our operations are guided by a passion for food security, environmental sustainability and economic
                empowerment. Our focus is on cultivating high-quality crops and livestock while implementing innovative
                and eco-friendly farming techniques.
              </p>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image src="/images/chicken3.jpg?height=400&width=600" alt="DMT Acres Farm" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Operations */}
      <section className="py-16 bg-green-50">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Our Operations</h2>
            <p className="mx-auto max-w-[700px] text-gray-600">
              DMT Acres embraces a sustainable and symbiotic farming system where our poultry and crop production
              complement each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🚜</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Agro Dealing</h3>
              <p className="text-gray-600">
                We supply quality agricultural inputs seeds, fertilizers, crop protection, and tools to support sustainable and productive farming for small to medium-scale farmers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🐔</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Poultry Farming</h3>
              <p className="text-gray-600">
                We focus primarily on chicken farming, ensuring high-quality, nutritious poultry products for local
                markets. Our approach emphasizes proper animal husbandry, biosecurity and ethical farming practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🌽</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Crop Production</h3>
              <p className="text-gray-600">
                We cultivate a variety of staple and high value crops including Bananas, Plantains, Sugarcane, legumes (cowpeas), maize and cassava and
                other seasonal produce like tomato and garlic. We use sustainable farming techniques to maximize yield
                while preserving soil health.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Organic Fertilizer Production</h3>
              <p className="text-gray-600">
                As part of our commitment to environmental conservation, we produce organic fertilizer to enhance soil
                fertility and reduce reliance on chemical fertilizers, promoting eco-friendly and cost-effective manure.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-2xl">🐄</span> {/* Or use 🐐 depending on your livestock */}
              </div>
              <h3 className="text-xl font-semibold mb-4">Livestock Farming</h3>
              <p className="text-gray-600">
                We raise goats, cattle, and other livestock using sustainable and integrated farming practices. Our animals contribute 
                to food production and organic manure, supporting soil health and community livelihoods.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
            <p className="text-gray-600">
              The nutrient-rich manure from our chickens is carefully processed into organic fertilizer, which enriches
              the soil and enhances crop yields. In return, the crops provide a natural and sustainable source of feed
              for the poultry, creating a balanced ecosystem that minimizes waste and promote environmental
              sustainability. This integrated approach not only improves productivity but also supports long-term soil
              health, reducing the need for synthetic fertilizers while ensuring high quality produce.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Commitment */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tighter text-green-800">Our Vision</h3>
              <p className="text-gray-600">
                To become a leading agricultural enterprise in Malawi, driving sustainable farming practices and
                contributing to national food security and economic growth.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tighter text-green-800">Our Mission</h3>
              <p className="text-gray-600">
                To provide high-quality agricultural products through sustainable farming, advanced techniques, and
                community engagement, ensuring growth for both our business and the local farming sector.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tighter text-green-800">Our Commitment</h3>
              <p className="text-gray-600">
                We believe in sustainable agriculture that not only feeds communities but also nurtures the environment.
                Through innovative farming methods, responsible resource management, and continuous improvement, we
                strive to contribute to Malawi's growth and food security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Goals */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Our Business Goals</h2>
            <p className="mx-auto max-w-[700px] text-gray-200">
              DMT Acres is committed to growth, innovation, and sustainability in all our operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-green-400 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Increase Production Capacity</h3>
                <p className="text-gray-300">
                  Expand farming operations and improve crop yields through efficient farming techniques.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-green-400 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Strengthen Distribution Channels</h3>
                <p className="text-gray-300">
                  Build reliable partnerships with local markets, retailers and bulk buyers to expand product reach.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-green-400 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Achieve Financial Sustainability</h3>
                <p className="text-gray-300">
                  Optimize cost management, improve operational efficiency, and secure funding or grants for business
                  growth.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-green-400 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Implement Advanced Techniques</h3>
                <p className="text-gray-300">
                  Adopt precision farming, irrigation systems, and improved poultry housing for increased efficiency.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="h-6 w-6 text-green-400 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Diversify Product Offerings</h3>
                <p className="text-gray-300">
                  Introduce additional poultry breeds, new crop varieties, and value-added products such as packaged
                  organic fertilizers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Our Team Structure</h2>
            <p className="mx-auto max-w-[700px] text-gray-600">
              DMT Acres is led by a dedicated team of professionals committed to excellence in agriculture.
            </p>
          </div>
          {/* Third Level */}
          <h2 className="text-xl font-semibold mb-2">Executive</h2><br />
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            <TeamCard 
              name="Daniel Tsonga" 
              role="Managing Director"
              grade="BSc in Land Management"
              major="(Land Surveying)"
              imageSrc="/team/DanielTsonga.jpg" 
              />
            <TeamCard 
              name="Mwayi Tsonga" 
              role="Deputy Director"
              grade="Masters of Business Administration"
              major="(Strategic Marketing)"
              imageSrc="/team/MwayiTsonga.jpg"
              />
          </div>
          <br /><br />
          <h4 className="text-xl font-semibold mb-2">Finance and Administration</h4><br />
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            <TeamCard name="Sylvester Maluku" role="Administrator" grade="Bachelors of Laws (Hons) (pending)"  major={""} imageSrc="/team/sylvester-maluku.jpg" />
            <TeamCard name="Tears Bisani" role="Human Resource Manager" grade="Diploma in Human Resource Management"  major={""} imageSrc="/team/tears-bisani.jpg" />
            <TeamCard name="Angela Chinyama" role="Accountant" grade="Bcom in Financial Sciences"  major="(Financial Management, Accounting, Internal Auditing)" imageSrc="/team/angela-chinyama.jpg" />
            <TeamCard name="Edward Mbesa" role="Operations Manager" grade={"Bachelor of Social Sciences (Development Studies)"}  major={"Masters of Arts in Political Science (pending)"} imageSrc="/team/edward-mbesa.jpg" />
            <TeamCard name="Peace Msoza" role="Transport and Logistics Manager" grade="Bachelors of Science in Land Economy"  major="(Property Management and Marketing)" imageSrc="/team/peace-msoza.jpg" />
            </div>
          <br /><br />
          <h4 className="text-xl font-semibold mb-2">Production and Processing Department</h4><br />
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            <TeamCard name="Francisco Jonas" role="Quality Assurance Manager" grade="Bachelors of Science in Nutrition and Food Science"  major="(Human Nutrition)" imageSrc="/team/francisco-jonas.jpg" />
            <TeamCard name="Rabson Mvula" role="Productions Manager" grade="Diploma in Community Development"  major="Certificate in Legal Studies" imageSrc="/team/rabson-mvula.jpg" />
          </div>
          <br /><br />
          <h4 className="text-xl font-semibold mb-2">Environmental Department</h4><br />
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            <TeamCard name="Omega Tsonga" role="Safety and Environmental Manager" grade="Bachelors of Science in Environmental Sciences"  major="Masters in Tourism and Hotel Management (pending)" imageSrc="/team/omega-tsonga.jpg" />
          </div>
          <br /><br />
          <h4 className="text-xl font-semibold mb-2">Marketing Department</h4><br />
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            <TeamCard name="Carol Chingwalu" role="Marketing Manager" grade="Bachelors of Business Administration"  major="(Marketing)" imageSrc="/team/carol-chingwalu.jpg" />
            <TeamCard name="Pauline Makhalira" role="Trade Execution Manager" grade="Bachelors of Science in International Economics and Trade"  major="Bachelors of Science in Computing and Information Systems" imageSrc="/team/pauline-makhalira.jpg" />
          </div>
          <br /><br />
          <h4 className="text-xl font-semibold mb-2">Research and Consultancy Unit</h4><br />
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            <TeamCard name="Dr. Wisdom Malata" role="Research Consultant" grade={"PhD. Social Anthropology"}  major={"MA. Cultural Studies"} imageSrc="/team/dr-wisdom-malata.jpg" />
            <TeamCard name="Joseph Kaphesi" role="Scientific Analyst" grade="Bachelor of Science in Natural Resources Management" major="Bachelor of Arts in Organizational Leadership and Public Relations Masters in Communication Studies (pending)" imageSrc="/team/joseph-kapesi.jpg" />
          </div>
          <br /><br />
          <h4 className="text-xl font-semibold mb-2">Extension and Industrial Control System Department</h4><br />
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            <TeamCard name="Freddie Oliver Kokha" role="Agriculture Manager - Crops" grade="Diploma in Agriculture and Natural Resources Management" major="Bachelors of Development Economics (pending)" imageSrc="/team/fred-oliver-kokha.jpg" />
            <TeamCard name="Martha Kamchepera" role="Veterinary Manager" grade="Diploma in Animal Health and Production" major={""} imageSrc="/team/martha-kamchepera.jpg" />
            <TeamCard name="Chikondi Lifa" role="Agro-Spatial Analyst" grade="BSc in Land Management"  major={"(Land Surveying)"} imageSrc="/team/chikondi-lifa.jpg" />
            <TeamCard name="Louis Makhiringa" role="Irrigation Engineer" grade={"Bachelor of Science in Irrigation Engineering"}  major={""} imageSrc="/team/louis-makhiringa.jpg" />
            <TeamCard name="Chipiliro Chingwembere" role="Farm Manager" grade={"Malawi School Certficate of Education"}  major={""} imageSrc="/team/chipiliro-chigwembere.jpg" />
          </div>
        </div>
      </section>
    </div>
  )
}
