//2. Create your own resume data in JSON format

let resume_json = [
    {   'name':'Vimal Kumar R',
        'mobile': '8940506941',
        'email':'mdjohnvimal@gmail.com',
        'address':'No:30 thiru vi ka st, MGR Nagar'
    } ,
    {
    'educationalQualification':
    [
        {
        'degree':'BE(ECE)',
        'college':'MSEC',
        'CGPA':'8.29'
        },
        {
        'degree':'HSC',
        'percentage':'90'
        },
        {
        'degree':'X',
        'percentage':'86'
        }
    ]
    },
    {
        'skills':'HTML,CSS,JavaScript,Python,Azure Cloud',
        'tools':'VScode,Jupyter'
    },
    {
    'workExperience':
    [
        {
            'currentCompany':'Kyndryl(formerly called as IBM',
            'joinedMonth':'Oct',
            'joinedYear':'2019',
            'fullTime':'yes',
            'role':'Storage Admin'


        },
        {
            'previousCompany':'HCL',
            'joinedMonth':'Apr',
            'joinedYear':'2019',
            'leftMonth':'Oct',
            'leftYear':'2019',
            'fullTime': 'No',
            'role':'HardwareEngineer'
        }
    ]
    },
    {
    'certifications':
    [
        {
            'courseName':'ZeroToMastery-Python developer',
            'completedYear':'2021',
            'provider':'Udemy'
        },
        {
            'courseName':'Storage for Hybrid Cloud',
            'completedYear':'2021',
            'provider':'IBM'

        },
        {
            'courseName':'AZ-900, AZ-204, DP-900',
            'completedYear':'2021',
            'provider':'Microsoft'
        }
        
    ]
    }

]

console.log(JSON.stringify(resume_json))
