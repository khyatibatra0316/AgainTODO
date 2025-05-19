




import React, { useState,useEffect } from 'react';
import Image11 from './Imagei11.png';
import Image10 from './Image10.webp';
import { useNavigate } from 'react-router-dom';

export default function Main() {
    const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate('/enter');}
    const [tasksByDate, setTasksByDate] = useState({});
    const [selectedDate, setSelectedDate] = useState('');
    const [newTask, setNewTask] = useState({
        name: '',
        urgent: false,
        important: false,
        date: ''
    });
    const [currentTime,setCurrentTime]=useState(new Date());
                   
            
   useEffect(()=>{
    const intervalId=setInterval(()=>{
        setCurrentTime(new Date())
    },1000)
    return()=>clearInterval(intervalId)
   },[]);

    const handleAddTask = () => {
        if (!newTask.name.trim() || !newTask.date) return;

        const task = {
            ...newTask,
            id: Date.now()
        };

        setTasksByDate(prev => {
            const updatedTasks = { ...prev };
            if (!updatedTasks[newTask.date]) {
                updatedTasks[newTask.date] = [];
            }
            updatedTasks[newTask.date].push(task);
            return updatedTasks;
        });

        setNewTask({
            name: '',
            urgent: false,
            important: false,
            date: selectedDate 
        });
    };

    const determineQuadrant = (task) => {
        const { urgent, important } = task;
        if (urgent && important) return 'do';
        if (!urgent && important) return 'schedule';
        if (urgent && !important) return 'delegate';
        return 'delete';
    };

    const renderTasks = (category) => {
        const tasks = tasksByDate[selectedDate] || [];
        return tasks
            .filter(task => determineQuadrant(task) === category)
            .map(task => (
                <div
                    key={task.id}
                    style={{
                        backgroundImage: `url(${Image11})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '100vh',
                        width: '100%',
                        overflowX: 'hidden',
                        paddingBottom: '10vh'
                    }}
                >
                    <input
                        type="checkbox"
                        onChange={() => {
                            const updated = { ...tasksByDate };
                            updated[selectedDate] = updated[selectedDate].filter(t => t.id !== task.id);
                            setTasksByDate(updated);
                        }}
                        title="Mark as done"
                        style={{ width: '18px', height: '18px' }}
                    />
                    <div>
                        <strong>{task.name}</strong><br />
                        <span style={{ fontSize: '12px', color: '#aaa' }}>{task.date}</span>
                    </div>
                </div>
            ));
    };

    return (
        <>
            <div style={{ position: 'relative', width: 'auto' }}>
                <img src={Image11} style={{ width: '100%', height: '29vh', display: 'block' }} alt="Banner" />
                <img src={Image10} style={{ position: 'absolute', top: '20vh', left: '20px', height: '15vh', width: '14vh' }} alt="Teddy" />
            </div>

            <div style={{
                display: 'inline-block', textAlign: 'center', position: 'relative',
                padding: '10px 20px',
                border: '2px solid white',
                borderRadius: '8px',
                marginTop: '50px',
                animation: 'pulseBorder 2s infinite'
            }}>
                <h3 style={{
                    color: 'white',
                    fontSize: '40px',
                    margin: 0
                }}>To-do</h3>
                <div style={{
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '2px',
                    backgroundColor: '#00ffff',
                    animation: 'underlineMove 2s infinite linear',
                }} />
            </div>
            <div style={{
                display: 'inline-block', textAlign: 'center', position: 'relative',
                padding: '10px 20px',
                border: '2px solid white',
                borderRadius: '8px',
                marginTop: '50px',
                animation: 'pulseBorder 2s infinite',
                marginLeft:'120vh'
            }}>
                <button
  style={{ backgroundColor: '#704f3a' }}
  onClick={() => navigate('/enter')} 
>
  Want something more interesting?
</button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', gap: '10px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
                <input
                    type="text"
                    placeholder="Task name"
                    value={newTask.name}
                    onChange={e => setNewTask({ ...newTask, name: e.target.value })}
                />
                <label>
                    <input
                        type="checkbox"
                        checked={newTask.urgent}
                        onChange={e => setNewTask({ ...newTask, urgent: e.target.checked })}
                    /> Urgent
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={newTask.important}
                        onChange={e => setNewTask({ ...newTask, important: e.target.checked })}
                    /> Important
                </label>
                <input
                    type="date"
                    value={newTask.date}
                    onChange={e => {
                        setNewTask({ ...newTask, date: e.target.value });
                        setSelectedDate(e.target.value); 
                    }}
                />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                    onClick={handleAddTask}
                    style={{
                        padding: '10px 12px',
                        fontSize: '14px',
                        backgroundColor: 'rgb(248, 211, 177, 0.5)',
                        color: '#000',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        marginTop: '22px',
                        width: '10vh',
                        alignItems: 'center',
                        marginBottom:'5vh'
                    }}
                >
                    Add Task
                </button>
            </div>

            {selectedDate && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', padding: '0 20px', color: 'white' }}>
                    <div style={{
          backgroundColor: "#443b2b",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}>
                        <h4 style={{ color: "#fff" }}>Do It (Urgent + Important)</h4>
                        {renderTasks('do')}
                    </div>
                    <div style={{
          backgroundColor: "#c3b091",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}>
                        <h4 style={{ color: "#fff"}}>Schedule (Not Urgent + Important)</h4>
                        {renderTasks('schedule')}
                    </div>
                    <div style={{
          backgroundColor: "#e0c097",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}>
                        <h4 style={{ color: "#fff", marginBottom: "10px" }}>Delegate (Urgent + Not Important)</h4>
                        {renderTasks('delegate')}
                    </div> 
                     <div  style={{
          backgroundColor: "#ede0d4",
          borderRadius: "12px",
          padding: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}>
                        <h4 style={{ color: "#5c4033", marginBottom: "10px"}}>Delete (Not Urgent + Not Important)</h4>
                        {renderTasks('delete')}
                        

                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '40px',
                        padding: '20px'
                    }}>
                <p style={{
                    backgroundColor: '#5c4033', 
                    color: '#f8e3c8',          
                    padding: '20px 40px',
                    borderRadius: '16px',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
                    fontSize: '32px',
                    fontWeight: '600',
                    textAlign: 'center',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    minWidth: '240px',
                    letterSpacing: '2px',
                    fontFamily: 'monospace',
                    transition: 'transform 0.2s ease-in-out',
                    transform: 'scale(1.02)',
                    marginBottom:'10vh'
                }}>Current Time: {currentTime.toLocaleTimeString()}</p>
                </div>
                <div style={{ marginTop: '20px', width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
                        <iframe
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/playlist/2FVU4Z2Vd056OWsgluNk33?utm_source=generator"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    </div>

                </div>
            )}
        </>
    );
}



