import "./App.css";

function App() {
  const students = [
    {
      rollNo: 1,
      stdName: "Aarav Sharma",
      contact: "+91 98765 43210",
      address: "12A, MG Road, Andheri East, Mumbai, Maharashtra, 400069",
    },
    {
      rollNo: 2,
      stdName: "Ananya Verma",
      contact: "+91 91234 56780",
      address: "45, Laxmi Nagar, Near Metro Station, Delhi, Delhi, 110092",
    },
    {
      rollNo: 3,
      stdName: "Rohit Patil",
      contact: "+91 99887 66554",
      address: "Flat 3B, Shanti Heights, Kothrud, Pune, Maharashtra, 411038",
    },
    {
      rollNo: 4,
      stdName: "Sneha Iyer",
      contact: "+91 93456 78901",
      address: "22, Temple Street, Mylapore, Chennai, Tamil Nadu, 600004",
    },
    {
      rollNo: 5,
      stdName: "Karan Singh",
      contact: "+91 87654 32109",
      address: "Plot 17, Vaishali Nagar, Jaipur, Rajasthan, 302021",
    },
    {
      rollNo: 6,
      stdName: "Priya Nair",
      contact: "+91 90908 07060",
      address: "Rose Villa, Kaloor, Kochi, Kerala, 682017",
    },
    {
      rollNo: 7,
      stdName: "Aditya Mishra",
      contact: "+91 88990 11223",
      address: "H.No. 56, Civil Lines, Prayagraj, Uttar Pradesh, 211001",
    },
    {
      rollNo: 8,
      stdName: "Neha Gupta",
      contact: "+91 70123 45678",
      address: "C-14, Model Town, Panipat, Haryana, 132103",
    },
    {
      rollNo: 9,
      stdName: "Vikas Yadav",
      contact: "+91 98123 45670",
      address: "Near Bus Stand, Rewari Road, Mahendragarh, Haryana, 123029",
    },
    {
      rollNo: 10,
      stdName: "Pooja Kulkarni",
      contact: "+91 90234 56123",
      address: "Survey No. 88, Baner Road, Pune, Maharashtra, 411045",
    },
    {
      rollNo: 11,
      stdName: "Rahul Das",
      contact: "+91 84567 12345",
      address: "Lake View Colony, Salt Lake, Kolkata, West Bengal, 700091",
    },
    {
      rollNo: 12,
      stdName: "Simran Kaur",
      contact: "+91 97865 43219",
      address: "House No. 31, Model Town, Ludhiana, Punjab, 141002",
    },
    {
      rollNo: 13,
      stdName: "Manish Choudhary",
      contact: "+91 99876 54321",
      address: "Sector 15, Near HUDA Market, Gurugram, Haryana, 122001",
    },
    {
      rollNo: 14,
      stdName: "Ritika Saxena",
      contact: "+91 88976 12309",
      address: "Flat 402, Pearl Residency, Indirapuram, Ghaziabad, UP, 201014",
    },
    {
      rollNo: 15,
      stdName: "Suresh Reddy",
      contact: "+91 97012 34567",
      address: "Plot 9, Jubilee Hills, Hyderabad, Telangana, 500033",
    },
    {
      rollNo: 16,
      stdName: "Nisha Malhotra",
      contact: "+91 98111 22334",
      address: "B-7, Rajouri Garden, New Delhi, Delhi, 110027",
    },
    {
      rollNo: 17,
      stdName: "Arjun Mehta",
      contact: "+91 98234 55667",
      address: "Sunrise Apartments, Satellite, Ahmedabad, Gujarat, 380015",
    },
    {
      rollNo: 18,
      stdName: "Kavya Joshi",
      contact: "+91 90123 49876",
      address: "Near Clock Tower, Alkapuri, Vadodara, Gujarat, 390007",
    },
    {
      rollNo: 19,
      stdName: "Mohit Bansal",
      contact: "+91 98712 33445",
      address: "Street No. 5, Ashok Vihar, Rohtak, Haryana, 124001",
    },
    {
      rollNo: 20,
      stdName: "Aishwarya Rao",
      contact: "+91 93412 56789",
      address: "2nd Cross, Jayanagar, Bengaluru, Karnataka, 560041",
    },
    {
      rollNo: 21,
      stdName: "Deepak Kumar",
      contact: "+91 80012 34567",
      address: "Ram Nagar Colony, Kankarbagh, Patna, Bihar, 800020",
    },
    {
      rollNo: 22,
      stdName: "Shreya Banerjee",
      contact: "+91 91234 88990",
      address: "Gariahat Road, Ballygunge, Kolkata, West Bengal, 700019",
    },
    {
      rollNo: 23,
      stdName: "Nitin Pawar",
      contact: "+91 98876 65432",
      address: "Sai Nagar, Nashik Road, Nashik, Maharashtra, 422101",
    },
    {
      rollNo: 24,
      stdName: "Rupal Shah",
      contact: "+91 90345 61234",
      address: "Krishna Society, Paldi, Ahmedabad, Gujarat, 380007",
    },
    {
      rollNo: 25,
      stdName: "Amit Thakur",
      contact: "+91 98165 43210",
      address: "Lower Bazaar, Solan, Himachal Pradesh, 173212",
    },
    {
      rollNo: 26,
      stdName: "Swati Deshpande",
      contact: "+91 97654 32198",
      address: "Tilak Nagar, Osmanpura, Aurangabad, Maharashtra, 431005",
    },
    {
      rollNo: 27,
      stdName: "Ravi Teja",
      contact: "+91 90523 45678",
      address: "Main Road, Gajuwaka, Visakhapatnam, Andhra Pradesh, 530026",
    },
    {
      rollNo: 28,
      stdName: "Mehul Jain",
      contact: "+91 99812 33456",
      address: "Jain Colony, Chhawani, Indore, Madhya Pradesh, 452001",
    },
    {
      rollNo: 29,
      stdName: "Farhan Ali",
      contact: "+91 88234 56789",
      address: "Charminar Road, Old City, Hyderabad, Telangana, 500002",
    },
    {
      rollNo: 30,
      stdName: "Ishita Ghosh",
      contact: "+91 91289 45670",
      address: "New Town Action Area 1, Rajarhat, Kolkata, WB, 700156",
    },
    {
      rollNo: 31,
      stdName: "Akash Negi",
      contact: "+91 98976 54309",
      address: "Ballupur Chowk, Dehradun, Uttarakhand, 248001",
    },
    {
      rollNo: 32,
      stdName: "Payal Arora",
      contact: "+91 98123 88991",
      address: "Green Park Extension, New Delhi, Delhi, 110016",
    },
    {
      rollNo: 33,
      stdName: "Sanjay Soni",
      contact: "+91 70012 33455",
      address: "Sarafa Bazaar, Ujjain, Madhya Pradesh, 456001",
    },
    {
      rollNo: 34,
      stdName: "Rina Dutta",
      contact: "+91 93467 88900",
      address: "VIP Road, Six Mile, Guwahati, Assam, 781022",
    },
    {
      rollNo: 35,
      stdName: "Harsh Vardhan",
      contact: "+91 99123 44556",
      address: "Near Railway Station, Ara, Bihar, 802301",
    },
    {
      rollNo: 36,
      stdName: "Komal Chawla",
      contact: "+91 98765 90123",
      address: "Sector 20, Panchkula, Haryana, 134116",
    },
    {
      rollNo: 37,
      stdName: "Naveen Kumar",
      contact: "+91 88876 54321",
      address: "ITI Colony, Hosur Road, Bengaluru, Karnataka, 560029",
    },
    {
      rollNo: 38,
      stdName: "Pankaj Rawat",
      contact: "+91 97654 88912",
      address: "Haldwani Road, Rudrapur, Uttarakhand, 263153",
    },
    {
      rollNo: 39,
      stdName: "Tanvi Kulkarni",
      contact: "+91 90234 77889",
      address: "Prabhat Road, Deccan Gymkhana, Pune, Maharashtra, 411004",
    },
    {
      rollNo: 40,
      stdName: "Zoya Khan",
      contact: "+91 84567 99001",
      address: "Bhopal Talkies Road, Peer Gate, Bhopal, MP, 462001",
    },
    {
      rollNo: 41,
      stdName: "Rameshwar Lal",
      contact: "+91 99876 11122",
      address: "Gandhi Chowk, Bikaner, Rajasthan, 334001",
    },
    {
      rollNo: 42,
      stdName: "Shruti Pandey",
      contact: "+91 91234 55678",
      address: "Sigra, Near IP Mall, Varanasi, Uttar Pradesh, 221010",
    },
    {
      rollNo: 43,
      stdName: "Kunal Kapoor",
      contact: "+91 98712 88990",
      address: "Model Gram, Jalandhar, Punjab, 144003",
    },
    {
      rollNo: 44,
      stdName: "Bhavya Modi",
      contact: "+91 90908 77665",
      address: "Ring Road, Athwa Gate, Surat, Gujarat, 395001",
    },
    {
      rollNo: 45,
      stdName: "Siddharth Jain",
      contact: "+91 98123 44559",
      address: "Civil Lines, Sagar, Madhya Pradesh, 470001",
    },
    {
      rollNo: 46,
      stdName: "Preeti Chavan",
      contact: "+91 93456 11223",
      address: "Datta Nagar, Sangli Road, Kolhapur, Maharashtra, 416001",
    },
    {
      rollNo: 47,
      stdName: "Yash Malviya",
      contact: "+91 88234 90012",
      address: "Mhow Naka, Rajendra Nagar, Indore, MP, 452012",
    },
    {
      rollNo: 48,
      stdName: "Ankit Roy",
      contact: "+91 97012 88990",
      address: "Ashrampara, Siliguri, West Bengal, 734001",
    },
    {
      rollNo: 49,
      stdName: "Divya Menon",
      contact: "+91 94465 77889",
      address: "Kowdiar Gardens, Trivandrum, Kerala, 695003",
    },
    {
      rollNo: 50,
      stdName: "Rajesh Chatterjee",
      contact: "+91 98321 45678",
      address: "Howrah Maidan, Howrah, West Bengal, 711101",
    },
  ];

  return (
    <div className="container">
      <h1 className="title">ID CARD GENERATOR APP</h1>

      <div className="cards">
        {students.map(function (student) {
          return (
            <div className="card" key={student.rollNo}>
              <div className="card-image"></div>
              <h2 className="card-name">{student.stdName}</h2>
              <h3 className="card-contact">Contact : {student.contact}</h3>
              <address className="card-address">{student.address}</address>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
