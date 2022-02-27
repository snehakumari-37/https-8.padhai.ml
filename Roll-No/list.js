const students = {
    1:'Anjali',
    2:'Ambika Shukla',
    3:'Priya',
    4:'Chitra',
    5:'Himanshi',
    6:'Jhanvi Verma',
    7:'Payal',
    8:'Neha Drall',
    9:'Sakshi Malik',
    10:'Hanshika',
    11:'Prachi',
    12:'Komal',
    13:'Rakshita',
    14:'Saraswati',
    15:'Vanshika Kumari',
    16:'Preeti',
    17:'Nupur',
    18:'Sandhya',
    19:'Manmeet',
    20:'Tamanna',

    21:'Mayank Kumar',
    22:'Deepanshu',
    23:'Dipesh Kumar',
    24:'Swastik Singh',
    25:'Ishant',
    26:'Deepak Gusain',
    27:'Daksh',
    28:'Nikhil',
    29:'Aakash Kumar',
    30:'Nishant Kumar',
    31:'Samir',
    32:'Sanjeev',
    33:'Yash Singh',
    34:'Mohit Rana',
    35:'Durgesh Chaudhary',
    36:'Siddarth',
    37:'Subhankar Behra',
    38:'Krishan Kumar',
    39:'Sumit Kumar',
    40:'Ashish Singh',
    41:'T.R. Harshun',
    42:'Aaradhya Dhyani',
    43:'Aniket Karn',
    44:'Harsh',
    45:'Anant',
    46:'Md Ahmadullah',
    47:'Subham Kumar',
    48:'Prashant Saraswat'
}
const totalStudents = 48;
function saveAsTxt(filename) {
    filename = filename + ".txt";
    innertxt = [];
    for (rollNo = 1; rollNo < totalStudents; rollNo++) {
        innertxt.push(rollNo + "." + students[rollNo])
    }
    innertxt = innertxt.join('\n')
    var blob = new Blob([innertxt],
        { type: "text/plain;charset=utf-8", endings: 'native' }
    )
    saveAs(blob, filename);
}