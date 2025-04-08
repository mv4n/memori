import { useState } from 'react';

function FormValidation({ onAddEntry }) {
    const today = new Date().toISOString().split('T')[0];
    const minDate = '1986-06-15';

    const [formData, setFormData] = useState({
        title: '',
        tags: '',
        date: today,
        text: ''
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        // Title validation
        if (!formData.title.match(/^[A-ZА-Я][a-zа-я]{2,}$/)) {
            newErrors.title = 'Тайтл має починатися з великої літери та мати мінімум 3 літери';
        }

        // Tags validation
        if (!formData.tags.match(/^[a-zа-я\s]*$/)) {
            newErrors.tags = 'Теги можуть містити лише літери та пробіли';
        }

        // Date validation
        if (new Date(formData.date) < new Date(minDate)) {
            newErrors.date = 'Дата не може бути раніше 15.06.1986';
        }

        // Text validation
        const words = formData.text.trim().split(/\s+/);
        if (!formData.text.match(/^[A-ZА-Я]/) || words.length < 4) {
            newErrors.text = 'Текст має починатися з великої літери та містити мінімум 4 слова';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onAddEntry(formData);
            setFormData({
                title: '',
                tags: '',
                date: today,
                text: ''
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Тайтл"
                />
                {errors.title && <span style={{ color: 'red' }}>{errors.title}</span>}
            </div>

            <div>
                <input
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="Теги"
                />
                {errors.tags && <span style={{ color: 'red' }}>{errors.tags}</span>}
            </div>

            <div>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    min={minDate}
                    max={today}
                    onChange={handleChange}
                />
                {errors.date && <span style={{ color: 'red' }}>{errors.date}</span>}
            </div>

            <div>
        <textarea
            name="text"
            value={formData.text}
            onChange={handleChange}
            placeholder="Текст"
        />
                {errors.text && <span style={{ color: 'red' }}>{errors.text}</span>}
            </div>

            <button type="submit">Додати</button>
        </form>
    );
}

export default FormValidation;