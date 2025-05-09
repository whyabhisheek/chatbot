let prompt=document.querySelector("#prompt")
let submitbtn=document.querySelector("#submit")
let chatContainer=document.querySelector(".chat-container")
let imagebtn=document.querySelector("#image")
let image=document.querySelector("#image img")
let imageinput=document.querySelector("#image input")

const Api_Url="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBT7-mDZoN9TOhLH6uoaTIRcVH8uDZm59k"

let user={
    message:null,
    file:{
        mime_type:null,
        data: null
    }
}

async function generateResponse(aiChatBox) {
    let text = aiChatBox.querySelector(".ai-chat-area");

    let seacetInfo = `About SEACET

S.E.A College of Engineering and Technology (SEACET) was established by Founder Chairman Sri. A. Krishnappa in the year 2007 under SEAET, offering world-class infrastructure. The Management is keen to uphold the traditional Indian values as the thrust here is to blend thoroughly the modern and the traditional. An effort is a foot in the institution not only to raise the self-esteem of the student but to train him to respect others also.

Initially, it started functioning with Computer Science and Engineering, Electronics and Communication Engineering, Information Science and Engineering and Mechanical Engineering branches, offering 4-year duration Degree Programme in Engineering. Two-year duration Masters Programme in Master of Business Administration (MBA) was added in the year 2008-09 where as a 4-year duration degree programme in Civil Engineering was introduced in the year 2009-10. The approved intake for the courses for the present are as follows; Computer Science & Engineering: 120; Information Science & Engineering: 60; Electronics & Communication Engineering: 60; Mechanical Engineering : 30; Civil Engineering: 30; Artificial Intelligence and Machine Learning: 60; CSE (IoT and Cyber Security): 60; Agricultural Engineering: 30; Artificial Intelligence & Data Science: 60; MBA: 60; M. Tech., (Computer Science and Engineering): 9 and M. Tech., (VLSI Design and Embedded Systems):18 with a total approved intake of 567 students per annum. The Institution, approved by the Government of Karnataka and All India Council of Technical Education, New Delhi is presently affiliated to the Visvesvaraya Technological University (VTU), Belagavi, Karnataka.

2.Founder
Sri A. Krishnappa   Founder, S.E.A.E.T.
Greetings from our Founder,

We believe that education is the bedrock of all transformation and progress. In pursuance of our belief, we forayed into the field of education in the year 1972. The first trust is Sri Venugopalswamy Educational Trust. In the year 2000, South East Asian Education Trust was formed with many aspects.

During this time the school has created a niche for itself. The school endeavours to provide a holistic education for the overall development of the child: striving for Excellence is the leitmotif, be it academic, sports, debates, declamations, music, dance, art, craft, theatre or literary pursuits. In addition to this, we were into courses like Arts Science (in 2002) Nursing (in 2003) and Engineering & Technology (in 2007) offering world-class infrastructure the Management is keen to uphold the traditional Indian values. The thrust here is to blend thoroughly the modern and the traditional. An effort is afoot in the institution not only to raise the self-esteem of the student but to train him to respect others also. The teaching-learning technique in the institution is mainly based on Do, Feel, Learn, Reflect and Be. Children here mainly learn through exploration, experimentation, critically examine things and suggesting alternatives

Field trips, educational tours, visits to historical and cultural places enhance their learning. The aim is to give them maximum exposure so that their aspirations are raised. By employing various strategies like involving them in real-life situations we are trying to instill in our children an indefatigable will-power so that they are able to face undauntedly the challenges of life. We have tried to create an environment which is conducive for learning: it aims at high achievement by challenging the pupils. The institution is conscious that mere intellectual growth is not enough: the refinement of the soul, “Atma Samskriti” is needed. Therefore, there is plenty of emphasis on those finer and delicate values which constitute the grace of life. The total institution is programmed in order to empower the child: it helps him to realize his optimum potential. It is hoped that our students would have imbibed enduring values from the institution which will prove to be a dependable anchor throughout their lives. They will have equipped themselves with an impeccable character and ideals to deal with the roller coaster that life is. Throughout their lives, they will continue to draw inspiration from the institution motto. Arise! Awake! And Stop Not Till The Goal Is Reached

3.Board of Management
Mrs. Manjula Krishnappa
CHAIRMAN
image description
Mr. D.T Srinivas
SECRETARY
image description
Mrs. Poornima K
CEO
image description
Mrs. Anupama K
JOINT SECRETARY

4. Dr. B. Venkata Narayana  , Principal, S.E.A-CET
Greetings from our Principal,

"Welcome to S.E.A College of Engineering, an oasis where bright minds are developed to become tomorrow's professionals and socially conscious people, on behalf of the institute. Our mission at S.E.A College of Engineering is built on perseverance, discipline, hard work, and a strong emphasis on teamwork and taking on significant responsibility. Because of this culture, our students are able to assume personal responsibility for their families, communities, and country in addition to adapting to the challenges of the modern world. The institute has established clear goals and action plans to ensure excellence in every facet of high-quality technical education. We firmly think that developing team players, providing career assistance, and holding teachers to high standards will all contribute to academic success.

With Regards,
Dr B. Venkata Narayana,
Principal, S.E.A-CET,
+91 9448956755
Office: 080-25613418
Email : principal.seacet@seaedu.ac.in 


5.location and details about the college
image description
AYYAPPA NAGAR, DEVASANDRA MAIN ROAD, K.R. PURAM, BANGALORE- 560049 INDIA

image description
+917353945999
080 25613418
image description
seaeduinfo@seaedu.ac.in,
seacetblr@gmail.com

6. Engineering courses offered
a.UG :
Computer Science and Engineering
Information Science and Engineering
Electronics and Communication Engineering
Mechanical Engineering
Civil Engineering
Artificial intelligence & Machine learning
CSE (IoT & Cyber Security including Blockchain Technology)
Basic Science
Agricultural Engineering
Artificial intelligence & Data Science

b . PG:

M-Tech: VLSI,CSE
MBA

c. Research:

Computer Science and Engineering
Mechanical Engineering
Electronics and Communication Engineering
MBA
Chemistry

7.Placement Overview
The campus placement policy is defined so that recruitment process carried out in S.E.A. College of Engineering and Technology is transparent, fair, and beneficial for all the stakeholders, especially students and companies. It intends to create an atmosphere in which recruiters and students can interact freely and effectively, resulting in a fruitful recruitment process. This placement policy is applicable to all the students & recruiters who are willing to participate in the placement recruitment drives organized at the department office. Placement Department facilitates and coordinates the placement related activities physical or virtual.It extends the platform for the students to get trained & groomed for the selection process and also organizes the recruitment drives but does not guarantee the job. It is the sole responsibility of the students to enroll, prepare, participate, perform & get placed.


General Registration at Placement Department
To participate in the placement process, all the students must register for the same in the department of Placements providing all the details pertaining to previous & current year academic performance, acquired skill sets, personal information, communication address, email-id, contact details etc,. Details provided should be flawless and should be updated in a timely manner. However, it is advised to retain the same email & contact number to be in touch with the college as long as possible. Any information regarding placements & training opportunities will be disseminated to these registered students. Registration is done both digitally & manually

Once registered, students should adhere to Rules, Regulations and Policies of the Placement Department strictly. Also students should attend all the activities insisted on by the department without fail.

8.Enrollment for Placement
Companies interested in recruitment drives approach the college / Placement office and provide the details of Job description. Same will be circulated among the registered students. Students who are interested in participation in the placement process, shall go through the company’s website and JD details thoroughly and asses the suitability depending on type, credentials& location of the company, along with job role suitability, pay package, perks, work options, working shifts, working hours, skill requirements, eligibility etc. and then enroll themselves through the prescribed format. Once enrolled, he/she has to appear for the selection process without fail.


9.Eligibility for placement
An eligibility criterion varies from company to company. However generalized eligibility criteria are as below


Should have completed all academic requirements for the degree program they are enrolled in
Should have attained at least the minimum academic criteria (pass percentage / CGPA) as specified
Should not have any backlogs
Should have good communication skill
Also there could be other desirable requirements

Generally, all the companies specify the eligibility criteria under Job Description (JD) title, during recruitment process. All the students who meet the criteria as provided in JD by the respective companies are eligible to participate in the selection process

10. Dr.Chidanand Prasad R ,  Professor and Director of Placements, S.E.A.C.E.T.
Greetings from our Placement Director,

"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."

The Placement Office plays a crucial role in bridging the gap between education and employment. Our primary goal is to assist our students in achieving their career aspirations and securing meaningful employment opportunities upon graduation. We work tirelessly to connect students with prospective employers and provide guidance, resources and support throughout the Job search process.

To our students, I want to emphasize that your time at S.E.A institution is a precious period of growth, learning, and self-discovery. Take full advantage of the educational resources available to you, engage with your professors, and participate in extracurricular activities. As you progress through your academic journey, be mindful of your career goals and the skills you need to achieve them. The Placement Office is here to guide you in developing those skills, building your resume, and preparing you for interviews. Our team is dedicated to helping you make informed decisions about your career path and connecting you with Employers.

To the parents, we understand that your child's education and future are of utmost importance to you. We want to assure you that we share your commitment to their success. Our team is here to provide you with information and updates on your child's progress and the support they receive through our services. We believe in open communication, and we encourage you to reach out to us with any questions or concerns you may have.

Throughout the year, we will organize workshops, seminars, and career fairs to further enhance the employability of our students. We will also keep you informed about job opportunities, internships, and networking events. Please stay engaged with our office and take advantages of the resources and guidance that we offer.

I want to assure you that the Placement Office is committed to supporting you and your child's journey towards a bright and successful future. We look forward to working together, nurturing your talents, and watching you achieve your dreams.

Once again, welcome to our S.E.A academic community. Here's to a year filled with growth, opportunities and success.

Dr.Chidanand Prasad R
Professor and Director:Placements, S.E.A.E.T.,
 : 8095700789
 :-placement.seacet@gmail.com
 : director.placements@seaedu.ac.in

11. Recruiting Companies
IBM
SAMSUNG
APPLE
KODR
WIPRO
INFOSYS
ACCENTURE 

12.Training Methodology
Objective	Application	Methodology	Take Away	Duration
Aptitude Test

Focus On

Logical Ability
Analytical Ability
Reasoning Ability
Data Interpre
Classroom

Exercises

All concepts required to be
learnt by the student to
successfully clear a
placement aptitude test.

10 Hours

Group Discussion

Focus On

Dynamics of GD
GD Etiquettes
Topics of Discussion
Throught Process
Value Addition
Effective Speech
Application of GD

A comprehensive guide to group
discussions and everything
related to maximising
your chances of clear GD.

5 Hours

Resume Building

Resume 101

Resume writing lap

An original, unique, self-made
resume with every student.

4 Hours

Personal
Interviews

Focus On

Interview F.A.Q's
Answering Strategies
Question Prediction
Raaport Building
Selling Yourself
One-on-One

Interviews

Persepective:

99% Actual Interview

1% Simulation Experience

6 Hours

Industry Specific
Orientation

9 Hours

Business Case
Competition

6 Hours

Total 40 hours course (5 Days)

13.DEPARTMENT OF TRAINING AND PLACEMENT FOCUSES ON THE FOLLOWING SKILL DEVELOPMENT PROGRAMMES:

TECHNICAL SKILLS

C, C++
Java
Python
Design Thinking
Problem Solving
Machine Learning, AI
IOT Basic Concepts
Auto Cad 2D/3D
Database & Hadoop
Data Structures
Algorithms
Embedded systems
Ansys, Hypermesh
Unique Graphics
QA and Safety
& many more…
APTITUDE

Property of Numbers
Concepts of Multiples
Factorial Concept
Last Digit & Remainders
Probability & Statistics
Percentage, Proportions
Mixture & Allegation
Speed Distance Time
Time & Work
Clocks & Calendars
Basics of Algebra
Basic Trignometry
Coding & Decoding
Deductive Reasoning
Family Tree & Directions
& many more…
SOFT SKILLS

Grooming & Discipline
Etiquette-oral and written
Attitude
Goal Setting
Career Planning
Resume Writing
Goal & Career Plan
Time Management
Stress Management
Problem Solving
Leadership skills
Public speaking
Group Discussions
Personal Interview
Team Building
& many more…
COMMUNICATION SKILLS

English Grammar
English Vocabulary
Reading for Comprehension
Writing for Communication
Listening for Comprehension
Listening for Information
Tactical Speaking
Business Communication
& many more…
DIGITAL SKILLS

Microsoft Word
Microsoft Excel (Level 1)
MS PowerPoint(Level 1)
MS PowerPoint(Level 2)
Microsoft Excel (Level 2)
Digital Marketing(Level 1)
Digital Marketing (Level 2)
Microsoft Excel (Level 3)
& many more…
LEARNING AT TALENT TRANSFORMATION HUB

Understand and identify how you learn best
Learn to learn individually, in small and large groups
To get a competitive edge, increase employability
Know your social obligations, their place in society
Experience enough opportunities to identify your strength and capabilities through situational interactions

14.Facilies

a.Hostel Facilities

Hostel Facilities
Currently, the college features one girls' hostel and two boys' hostels. Around 530 males and 400 girls can board at these hostels. Each hostel's Warden is in charge of running day-to-day operations. A Hostel Committee is also present to assist in making policy decisions. On alternate days, early morning yoga and meditation lessons are offered to both boys and girls.

The lodging is offered on a shared basis. Basic furnishings including a cot, table, and chair are offered in the rooms. The students themselves are required to bring bed linens, towels, and other items. In the hostels, strict discipline is upheld. Entry after midnight and leaving the hostel without authorization are prohibited. Both smoking and drinking are strictly forbidden on hostel property. Unauthorised people are not allowed in.

The vegetarian cuisine served at the hostel mess is created by the hostel's own boarders. Along with regular academic work, the boarders benefit from a variety of sports and cultural activities.

Within the hostel grounds, there is a nicely furnished guest room for parents and visitors. In addition to the library services, a separate browsing centre is available for boarders to use the internet until midnight.

b.Library

Library Facilities
Information and a Library Centre Among engineering colleges in the state, SEACET has one of the top libraries. It began operating with the goal of developing into a leading learning resource centre with cutting-edge library materials and services in science and technology. It primarily contains books about engineering and related topics. In 2007, the S E A Engineering College built a library with a 5000 square metre space. The library's collection consists of 23562 books with 5166 titles in print. The library contains a wide selection of general books, including English novels, dictionaries, yearbooks, textbooks, and encyclopaedias.


The Library & Information Center's user-friendly strategy guarantees that its instructors and students have access to the unwavering information and intellectual needs they need. There are multiple copies of the textbooks, ensuring that the Reference Section and Stock Section have easy access to information. Additionally, it offers photocopying, CD/DVD, Internet, lending of books and periodical back issues, etc.


The library has a maintained OPAC and adopts an open access system. The Dewey Decimal Classification (DDC) system is used by the library to categorise publications in order to meet the needs of students, faculty, and research scholars. Using EasyLib Library Automation Software, the library is entirely computerised. All the contemporary amenities needed for a college library are present at SEACET Library & Information Centre.

c.Data Centre and Campus Wide Networking
image description
Data Centre and Campus Wide Networking
The Campus Wide Networking (CWN) facility of the university is monitored by the Data Centre to ensure constant network connectivity across the campus. Currently, CWN has three redundant, top-of-the-line carrier-class core switches and 100 access switches. Through a multimode fibre optic backbone, the connectivity between the core switch and the access switch is established. The intranet's current bandwidth is 10 GBPS. To meet the campus's internet needs, the CWN is currently complemented with a redundant 100 MBPS internet link. To fulfil the campus's computing needs, the college has hosted a private cloud on a virtualized environment comprising blade servers and flex servers with fibre SAN storage. The campus network has made it possible to provide easy access to online lectures and e-journals. software and streaming services for lectures online. The institution's email and webservers are also housed in the data centre.

d.Sports and Fitness

INTRODUCTION
Success requires both a good intellect and a powerful body. The S.E.A College of Engineering and Technology's college curriculum includes a sizable portion on athletics. In order to support a wide range of sports, including cricket, football, volleyball, badminton, and kho-kho, the college has very fine playing fields. Additionally, there are areas designated specifically for indoor sports including chess, caroms, weightlifting, table tennis, and badminton. Additionally, it contains a snooker room. In addition, SEACET features a sizable indoor gym with spaces designated for yoga, weight training, and cardio workouts. Box Cricket is another activity that is possible. For girls students, a special facility is available to conduct the aerobics-based slimming activity. There is a dedicated coach. For this purpose, a dedicated coach is available. Only college students and faculty have access to the lawn tennis courts. There is a shooting range there with the various slots.


The college possesses the essential sporting goods to participate in the aforementioned games. Over the past five years, the college has hosted tournaments at the collegiate level on its playing grounds. Additionally, state and interstate competitions are held on the sports field and in the facilities. On occasion, business offices also use the grounds.

e.Transportation

INTRODUCTION
S.E.A transport system provides the safest, comfortable joyful journey by Picking up and dropping the students on time from campus and to the home


There are 35 buses and 5 mini vehicles with 40 drivers and 40 helpers in the bus to assist the Students. Mr. Subramani, The transport manager, takes care of the system periodic orientation workshops are conducted to drivers and cleaners on “safe driving”


Once the route has been finalized no changes/ diversion will be entertained. In case of a change of address resulting in a change of route, parents should inform the college transport authorities in writing, to facilitate efficient planning. Drivers are not authorized or permitted to take decisions


Each bus has been given a mobile phone for emergency use only, and drivers are not permitted to use the phone while driving. Students using college transport are required to follow the guidelines as per the college Code of Conduct on college buses

f.Shri A Krishnappa Memorial Hospital

Shri A Krishnappa Memorial Hospital
A man who started a private engineering college two decades ago with the goal of educating people. The man was none other than Sri A. Krishnappaji, the founder of the S.E.A Group of Institutions. His daughter, Mrs. Poornima Srinivas, carried out her father's wish to assist the less fortunate by laying the cornerstone for SHRI A KRISHNAPPA MEMORIAL HOSPITAL in 2018. Before his initiatives could acquire traction, his soul left us, leaving us with the duty of continuing his legacy and providing the greatest accessible medical institution. Our life trustee Mrs. Manjula Krishnappa, inspired by her husband's charitable and noble ideals, has transformed SHRI A KRISHNAPPA MEMORIAL HOSPITAL into a cutting-edge multidimensional hospital where anyone can seek treatment and are under the supervision of qualified medical professionals without discrimination.

g.
CATNTEEN
The college has a canteen on its campus where it serves good and sanitary south indian and north indian food. Additionally, it offers a range of ice cream flavours, bread goods, chats, and fruit juices for affordable prices. Every working day, the canteen is open. Depending on the season, different beverages are provided on different days. The canteen has enough seating and serving capacity for both students and workers, and it is clean and well-ventilated.

15.Reasons to Choose Us
01. Innovation
Innovation is key drive in today’s engineering world, It’s almost impossible to mention the words ‘higher education’ without ‘innovation’ following closely behind.

02. Strategies
An effective engineering strategy starts with technical specifications that explain the reasoning behind a specific solution to a particular problem.

03. Promising Result
Every student gets good placement well reputed and renowned companies, curriculum was excellent. College provide us internship for better future and experience.

04. Campus Infrastructure
S.E.A Academy campus has a distinct, futuristic, and iconic design that is the result of innovative thought. Our campus is a marvel in many aspects!


16. HOD's of the following branches
	a. AIML-Dr. Lokesh 
	b. IOT - Dr. Nijaguna
	c. ISE - Dr. Sukesh.... [TRUNCATED FOR SPACE]
    For more, visit: https://seacet.edu.in/`;

    let parts = [{ text: user.message }];
    if (user.file.data) {
        parts.push({ inline_data: user.file });
    }

   let requestBody = {
    contents: [
        {
            role: "model",
            parts: [
                {
                    text: `You are an educational assistant. If the user asks a question about SEA College of Engineering and Technology (SEACET), answer it using the following context:\n\n${seacetInfo}\n\nOtherwise, use your general knowledge to respond helpfully.`
                }
            ]
        },
        {
            role: "user",
            parts: parts
        }
    ]
};


    let requestOptions = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
    };

    try {
        let response = await fetch(Api_Url, requestOptions);
        let data = await response.json();
        let apiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
        text.innerHTML = apiResponse;
    } catch (error) {
        console.log(error);
    } finally {
        chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: "smooth" });
        image.src = `img.svg`;
        image.classList.remove("choose");
        user.file = {};
    }
}




function createChatBox(html,classes){
    let div=document.createElement("div")
    div.innerHTML=html
    div.classList.add(classes)
    return div
}


function handlechatResponse(userMessage){
    user.message=userMessage
    let html=`<img src="user.png" alt="" id="userImage" width="8%">
<div class="user-chat-area">
${user.message}
${user.file.data?`<img src="data:${user.file.mime_type};base64,${user.file.data}" class="chooseimg" />` : ""}
</div>`
prompt.value=""
let userChatBox=createChatBox(html,"user-chat-box")
chatContainer.appendChild(userChatBox)

chatContainer.scrollTo({top:chatContainer.scrollHeight,behavior:"smooth"})

setTimeout(()=>{
let html=`<img src="ai.png" alt="" id="aiImage" width="10%">
    <div class="ai-chat-area">
    <img src="loading.webp" alt="" class="load" width="50px">
    </div>`
    let aiChatBox=createChatBox(html,"ai-chat-box")
    chatContainer.appendChild(aiChatBox)
    generateResponse(aiChatBox)

},600)

}


prompt.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
       handlechatResponse(prompt.value)

    }
})

submitbtn.addEventListener("click",()=>{
    handlechatResponse(prompt.value)
})
imageinput.addEventListener("change",()=>{
    const file=imageinput.files[0]
    if(!file) return
    let reader=new FileReader()
    reader.onload=(e)=>{
       let base64string=e.target.result.split(",")[1]
       user.file={
        mime_type:file.type,
        data: base64string
    }
    image.src=`data:${user.file.mime_type};base64,${user.file.data}`
    image.classList.add("choose")
    }
    
    reader.readAsDataURL(file)
})


imagebtn.addEventListener("click",()=>{
    imagebtn.querySelector("input").click()
})