import react from 'react';
import {Container,AppBar,Toolbar,Typography,Button} from '@mui/material';

function App(){
    return (
        <Container>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{flexGrow:1}}>
                        ST PETERS SECONDARY SCHOOL
                    </Typography>
                    <Button color="inherit">About us</Button>
                    <Button color="inherit">Admission</Button>
                    <Button color="inherit">Academics</Button>
                    <Button color="inherit">Contuct</Button>
                </Toolbar>
            </AppBar>

            <main style={{marginTop:'20px'}}>
                <Typography variant="h4"gotterBottom>
                ST Peters High School is dedicated to providing quality education and fostering a supportive learning environment.The school stands proudly in the heart of the community, its large white structure gleaming under the sun, a welcoming sight for students and parents alike. Inside, the hallways buzz with energy and laughter as students hustle between classes, eager to learn and connect with friends. Each classroom is filled with colorful charts and interactive displays that inspire creativity and engagement, while dedicated teachers nurture young minds with passion and care. The atmosphere is one of encouragement and growth, making it a place where both academic excellence and personal development flourish. 
                </Typography>
                <Typography variant="h5" gutterBottom>
                About us
                </Typography>

                <Typography variant="body1"paragraph>
                Learn more about our admissions process and how to apply
                By visiting the school's admission office to gather information about necessary documentation and procedures. 

                </Typography>
                <Typography variant="h5"gutterBottom>
                    Admissions
                </Typography>
                <Typography variant="body1"paragraph>
                The school admission process typically begins by visiting the school's admission office to gather information about necessary documentation and procedures. Applications often include an online form that collects family details and relevant academic background information. This initial step is crucial as it lays the groundwork for further evaluations, such as academic assessments, interviews, or campus visits. Each school's process may vary, so it is essential to check specific requirements and deadlines directly with the institution.

                </Typography>
                <Typography variant="h5"gutterBottom>
                    Academics
                </Typography>

                <Typography variant="body1"paragraph>
                We offer a wide range of of subjects and extracurricular activities to help student to excel in all aspects of life.
                Academics in our school serves as the foundation for students' intellectual growth, fostering critical thinking and problem-solving skills. ST Peters High School typically provide a structured curriculum that emphasizes core subjects such as mathematics, science, and language arts, while also integrating arts and physical education to support holistic development. Successful academic programs often implement innovative teaching methods, encouraging collaborative learning and practical application of knowledge. However, challenges such as varying learning paces and resource availability can impact academic outcomes. Overall, a balanced approach to academics, which prioritizes not just grades but also personal development, can lead to more engaged and well-rounded students.

                </Typography>

                <Typography variant="h5"gutterBottom>
                    Contuct Us
                </Typography>
                <Typography variant="body1"paragraph>
                For any inquiries, you may concact or reach out to us!
                Email: <a href="mailto:info@stpetershighschool.com">info@stpetershighschool.com</a>
                Phone: +256 0705520465
                </Typography>

            </main>
        </Container>
    );
}
export default App