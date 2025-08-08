import dotenv from 'dotenv';
import https from 'https';
import fetch from 'node-fetch';
import fs from 'node:fs/promises';

dotenv.config();

async function createIssue(title, description, projectId) {
  const token = process.env.GITLAB_TOKEN;
  const url = `https://git.spimex.dom/api/v4/projects/${projectId}/issues`;

  try {
    const agent = new https.Agent({
      rejectUnauthorized: false, // временно для тестирования
      // ca: fs.readFileSync('/path/to/certificate.crt') // укажите путь к сертификату
    });

    const response = await fetch(url, {
      method: 'POST',
      agent,
      headers: {
        'Private-Token': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        description: description,
        labels: ['dependencies'],
      }),
    });

    const result = await response.json();

    console.log('Issue created:', result);
  } catch (error) {
    console.error('Error creating issue:', error);
  }
}

async function main() {
  try {
    // Читаем файл напрямую
    const fileContent = await fs.readFile('outdated-report.json', 'utf8');
    // Очищаем от BOM и парсим JSON
    const cleanedContent = fileContent.replace(/^\uFEFF/, '');
    const outdatedPackages = JSON.parse(cleanedContent);

    const title = 'Устаревшие зависимости';
    let description = `Обнаружены устаревшие зависимости:\n\n`;
    let i = 0;

    for (const item in outdatedPackages) {
      description += `- ${item}: текущая версия ${outdatedPackages[item].current}, доступна ${outdatedPackages[item].wanted}\n`;
      i++;
    }

    if (i > 0) {
      createIssue(title, description, process.env.PROJECT_ID);
    }
  } catch (error) {
    console.error('Ошибка при обработке файла:', error);
  }
}

main();
