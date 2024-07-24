import { Box, Grid } from '@mui/material'
import TopBar from '../components/TopBar';
import SearchBar from '../components/SearchBar';
import { useFirestore } from 'data/FirestoreContext';
import { useEffect, useState } from 'react';
import StudentCard from './components/StudentCard';

const StudentsPage = () => {

    const { students, getStudents } = useFirestore();
    const [filteredStudents, setFilteredStudents] = useState([]);

    useEffect(() => {
        getStudents();
    }, [getStudents]);

    useEffect(() => {
        setFilteredStudents(students);
    }, [students]);

    const handleSearch = (search) => {
        const filtered = students.filter((student) =>
            student.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredStudents(filtered);
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }} >
            <TopBar name={`My Students (${filteredStudents.length}) `} />
            <Grid container spacing={2} sx={{ p: 4 }}>
                <Grid item xs={12} md={6} lg={6}>
                    <SearchBar onSearch={handleSearch} placeholder={"Search a student name"} />
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ p: 4, pt: 0 }}>
                {filteredStudents.map((student, index) => (
                    <Grid item xs={12} md={12} lg={12} key={index} >
                        <StudentCard student={student} />
                    </Grid>))
                }
            </Grid>
        </Box>
    );
}

export default StudentsPage;
