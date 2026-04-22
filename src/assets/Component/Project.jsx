import { useState } from "react";

function Project() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [projects, setProjects] = useState([]);
    const [open, setOpen] = useState(false); // sidebar toggle

    // Add Project
    const addProject = () => {
        if (!name || !description || !image) return;

        const newProject = {
            id: Date.now(),
            name,
            description,
            image: URL.createObjectURL(image)
        };

        setProjects([...projects, newProject]);

        // reset fields
        setName("");
        setDescription("");
        setImage(null);
    };

    // Delete Project
    const deleteProject = (id) => {
        setProjects(projects.filter((p) => p.id !== id));
    };

    return (
        <div className="projectPage">

            {/* MENU ICON */}
            <div className="menuIcon" onClick={() => setOpen(true)}>
                ☰
            </div>

            {/* OVERLAY */}
            {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

            {/* SIDEBAR */}
            <div className={`sidebar ${open ? "open" : ""}`}>
                <h3>Add Project</h3>

                <input
                    type="text"
                    placeholder="Project Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <input type="file" onChange={(e) => setImage(e.target.files[0])} />

                <button onClick={addProject}>Add Project</button>
            </div>

            {/* PROJECT DISPLAY */}
            <div className="projectContainer ">

                    {projects.length === 0 ? (
                        <div className="emptyState">
                            <p className="suggestion">No projects yet 🚀</p>
                            <p className="subText">Start by adding your first project</p>

                            <button className="openBtn" onClick={() => setOpen(true)}>
                                + Add Project
                            </button>
                        </div>
                    ) : (
                        projects.map((p) => (
                            <div key={p.id} className="card">
                                <img src={p.image} alt="" />
                                <h3>{p.name}</h3>
                                <p>{p.description}</p>
                                <button onClick={() => deleteProject(p.id)}>Delete</button>
                            </div>
                        ))
                    )}

            </div>

        </div>
    );
}

export default Project;