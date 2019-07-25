let students = [
    {
        name: "Amna",
        gender: "f",
        dob: new Date("02-04-1990"),
        address: {
            ilaqa: "Gulistan-e-Johar",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 47114
        },
        phoneNo: "0331-2324243",
        admissionTestScore: 56,
        hasInternet: true,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: false
    },
    {
        name: "Hadia",
        gender: "f",
        dob: new Date("05-15-1984"),
        address: {
            ilaqa: "Lyari",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 75660
        },
        phoneNo: "0345-3452953",
        admissionTestScore: 48,
        hasInternet: false,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: true
    },
    {
        name: "Ahmed",
        gender: "m",
        dob: new Date("06-27-2002"),
        address: {
            ilaqa: "University Road",
            city: "Quetta",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0333-0124325",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Fariha",
        gender: "f",
        dob: new Date("09-13-1998"),
        address: {
            ilaqa: "University Road",
            city: "Karachi",
            country: "Pakistan",
            postalCode: 82215
        },
        phoneNo: "0331-9432532",
        admissionTestScore: 33,
        hasInternet: true,
        hasComputer: false,
        hasJob: false,
        hasSchoolBefore: false
    },
    {
        name: "Abdullah",
        gender: "m",
        dob: new Date("01-24-1972"),
        address: {
            ilaqa: "Bazar Colony",
            city: "Lahore",
            country: "Pakistan",
            postalCode: 32212
        },
        phoneNo: "0345-9912121",
        admissionTestScore: 33,
        hasInternet: false,
        hasComputer: false,
        hasJob: true,
        hasSchoolBefore: true
    }
];


// for(i=0; i < students.lenght; i++){
//     if(students[i].addmissionTestScore >= 50){
//         console.log(students[i].name);
//     }
// }

// for(let i=0; i < students.length; i++){
//     if (students[i].address.city === "Karachi" && students[i].hasInternet === true) {
//         console.log(students[i].name);
//     }
// }


//  for (let i=0; i<students.length; i++) {
//     console.log(students[i].name + "s address:/n"
//      +students[i].address.ilaqa+ "in" + students[i]
//     .address.city+","+students[i].address.country);
//  }

//  for (let i=0; i<students.length; i++) {
//     if(students[i].phoneNo.charAt(2) === "3" &&
//     students[i].phoneNo.charAt(3) <= "7"){
//         console.log(students[i].name + "'s phone number is" + students[i].phoneNo)

//     }
//  }

// let GroupA = [];
// let GroupB = [];

//  for (let i=0; i < students.length; i++) {
//      if(students[i].hasJob === true || students[i].haSchoolBefore === true){
//         GroupB.push("Group A:" + students[i].name)
//      } else {
//          GroupA.push("Group B:" + students[i].name)
//      }
//  }
// console.log("group A" + GroupA.join(", "));
// console.log("group A" + GroupB.join(", "));

for (i=0; i<students.length; i++) {
    
    let dob = students[i].dob;
    let today = newDate();

    let yearDiff = today.getFullYear() dob.getFullYear() - 

}


