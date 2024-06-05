import React, { useState } from 'react';
import './FormularioReport.css';



function FormularioReport() {
    const [formData, setFormData] = useState({
        type: '',
        description: '',
        images: []
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formData); // Aqui você pode enviar os dados para onde quiser

        // Limpar o formulário após o envio (opcional)
        setFormData({
            type: '',
            description: '',
            images: []
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageChange = (event) => {
        const files = event.target.files;
        setFormData({
            ...formData,
            images: files
        });
    };

    return (
        <div className="container2">
            <h2>Relatar Incidente</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="incident-type">Tipo de Incidente:</label>
                    <select id="incident-type" name="type" value={formData.type} onChange={handleInputChange} required>
                        <option value="" disabled>Selecione um incidente</option>
                        <option value="queda">Queda</option>
                        <option value="vazamento">Vazamento</option>
                        <option value="incendio">Incêndio</option>
                        <option value="roubo">Roubo</option>
                        <option value="outro">Outro</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="incident-description">Descrição do Incidente:</label>
                    <textarea id="incident-description" name="description" value={formData.description} onChange={handleInputChange} rows="4" placeholder="Descreva o incidente aqui..." required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="incident-images">Anexar Imagens:</label>
                    <input type="file" id="incident-images" name="images" accept="image/*" multiple onChange={handleImageChange} required />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default FormularioReport;
