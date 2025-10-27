-- Создание таблицы вакансий
CREATE TABLE vacancies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    requirements TEXT,
    salary_from INTEGER,
    salary_to INTEGER,
    employment_type VARCHAR(50),
    location VARCHAR(255),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Индекс для активных вакансий
CREATE INDEX idx_vacancies_active ON vacancies(is_active) WHERE is_active = true;

-- Индекс для даты создания
CREATE INDEX idx_vacancies_created_at ON vacancies(created_at DESC);