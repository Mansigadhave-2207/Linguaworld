let currentLanguage = "";
console.log("Welcome to LinguaWorld");
document.addEventListener("DOMContentLoaded", function () {

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const currentItem = this.parentElement;

            // Close other FAQ items
            document.querySelectorAll(".faq-item").forEach(function (item) {
                if (item !== currentItem) {
                    item.classList.remove("active");
                }
            });

            // Open / Close current FAQ
            currentItem.classList.toggle("active");

        });

    });

});

/* =========================
   CONTACT FORM
========================= */

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || subject === "" || message === "") {

            formMessage.textContent = "⚠️ Please fill in all fields.";
            formMessage.className = "error-message";

            return;
        }

        formMessage.textContent =
            "✅ Thank you! Your message has been sent successfully.";

        formMessage.className = "success-message";

        contactForm.reset();

    });

});
/* =========================
   LANGUAGE QUIZ - 5 QUESTIONS
========================= */

const quizData = {

    english: [
        {
            question: 'What is the opposite of "Good"?',
            options: ["Bad", "Best", "Better", "Nice"],
            answer: "Bad"
        },
        {
            question: 'What is the plural of "Book"?',
            options: ["Books", "Bookes", "Bookies", "Book"],
            answer: "Books"
        },
        {
            question: 'What is the meaning of "Happy"?',
            options: ["Sad", "Joyful", "Angry", "Tired"],
            answer: "Joyful"
        },
        {
            question: 'Which word is a verb?',
            options: ["Run", "Beautiful", "Table", "Blue"],
            answer: "Run"
        },
        {
            question: 'What is the opposite of "Hot"?',
            options: ["Warm", "Cold", "Big", "Fast"],
            answer: "Cold"
        }
    ],

    hindi: [
        {
            question: '"Namaste" is a greeting in which language?',
            options: ["Hindi", "French", "German", "Japanese"],
            answer: "Hindi"
        },
        {
            question: '"Dhanyavaad" means?',
            options: ["Hello", "Thank You", "Goodbye", "Sorry"],
            answer: "Thank You"
        },
        {
            question: '"Paani" means?',
            options: ["Food", "Water", "Book", "House"],
            answer: "Water"
        },
        {
            question: '"Namaskar" means?',
            options: ["Hello", "Goodbye", "Sorry", "Thank You"],
            answer: "Hello"
        },
        {
            question: '"Mata" means?',
            options: ["Father", "Mother", "Brother", "Sister"],
            answer: "Mother"
        }
    ],

    marathi: [
        {
            question: '"Namaskar" means?',
            options: ["Hello", "Goodbye", "Thank You", "Sorry"],
            answer: "Hello"
        },
        {
            question: '"Dhanyavaad" means?',
            options: ["Thank You", "Hello", "Goodbye", "Welcome"],
            answer: "Thank You"
        },
        {
            question: '"Paani" means?',
            options: ["Water", "Food", "House", "Book"],
            answer: "Water"
        },
        {
            question: '"Aai" means?',
            options: ["Father", "Mother", "Brother", "Sister"],
            answer: "Mother"
        },
        {
            question: '"Shala" means?',
            options: ["School", "House", "Garden", "Market"],
            answer: "School"
        }
    ],

    japanese: [
        {
            question: 'What is "Hello" in Japanese?',
            options: ["Konnichiwa", "Arigato", "Sayonara", "Ohayo"],
            answer: "Konnichiwa"
        },
        {
            question: 'What is "Thank You" in Japanese?',
            options: ["Arigato", "Ohayo", "Sayonara", "Konnichiwa"],
            answer: "Arigato"
        },
        {
            question: 'What is "Good Morning" in Japanese?',
            options: ["Ohayo", "Arigato", "Sayonara", "Konnichiwa"],
            answer: "Ohayo"
        },
        {
            question: 'What does "Sayonara" mean?',
            options: ["Hello", "Goodbye", "Thank You", "Good Morning"],
            answer: "Goodbye"
        },
        {
            question: 'Which language uses Hiragana?',
            options: ["Japanese", "French", "German", "Korean"],
            answer: "Japanese"
        }
    ],

    korean: [
        {
            question: 'What is "Hello" in Korean?',
            options: ["Annyeonghaseyo", "Arigato", "Bonjour", "Danke"],
            answer: "Annyeonghaseyo"
        },
        {
            question: 'What is "Thank You" in Korean?',
            options: ["Gamsahamnida", "Annyeong", "Bonjour", "Danke"],
            answer: "Gamsahamnida"
        },
        {
            question: 'What is "Goodbye" in Korean?',
            options: ["Annyeong", "Bonjour", "Arigato", "Danke"],
            answer: "Annyeong"
        },
        {
            question: 'What is the Korean alphabet called?',
            options: ["Hangul", "Hiragana", "Kanji", "Latin"],
            answer: "Hangul"
        },
        {
            question: '"Annyeong" means?',
            options: ["Hello", "Thank You", "Sorry", "Good Morning"],
            answer: "Hello"
        }
    ],

    french: [
        {
            question: 'What is "Hello" in French?',
            options: ["Bonjour", "Danke", "Hola", "Konnichiwa"],
            answer: "Bonjour"
        },
        {
            question: 'What is "Thank You" in French?',
            options: ["Merci", "Bonjour", "Au revoir", "Hola"],
            answer: "Merci"
        },
        {
            question: 'What is "Goodbye" in French?',
            options: ["Au revoir", "Bonjour", "Merci", "Bonsoir"],
            answer: "Au revoir"
        },
        {
            question: 'What is "Yes" in French?',
            options: ["Oui", "Non", "Merci", "Hola"],
            answer: "Oui"
        },
        {
            question: 'What is "No" in French?',
            options: ["Non", "Oui", "Merci", "Bonjour"],
            answer: "Non"
        }
    ],

    german: [
        {
            question: 'What is "Thank You" in German?',
            options: ["Danke", "Bonjour", "Arigato", "Namaste"],
            answer: "Danke"
        },
        {
            question: 'What is "Hello" in German?',
            options: ["Hallo", "Danke", "Tschüss", "Bitte"],
            answer: "Hallo"
        },
        {
            question: 'What is "Goodbye" in German?',
            options: ["Tschüss", "Hallo", "Danke", "Bitte"],
            answer: "Tschüss"
        },
        {
            question: 'What is "Yes" in German?',
            options: ["Ja", "Nein", "Danke", "Hallo"],
            answer: "Ja"
        },
        {
            question: 'What is "No" in German?',
            options: ["Nein", "Ja", "Danke", "Bitte"],
            answer: "Nein"
        }
    ]

};


/* =========================
   QUIZ VARIABLES
========================= */

let currentQuestion = 0;
let score = 0;


/* =========================
   LOAD QUESTION
========================= */

function loadQuestion() {

    const selectedLanguage = languageSelect.value;
    const questions = quizData[selectedLanguage];

    const data = questions[currentQuestion];

    question.textContent =
        "Question " + (currentQuestion + 1) + " of 5: " + data.question;

    const optionsContainer =
        document.querySelector(".options");

    optionsContainer.innerHTML = "";

    data.options.forEach(function(option) {

        const label = document.createElement("label");

        label.innerHTML = `
            <input type="radio" name="answer" value="${option}">
            ${option}
        `;

        optionsContainer.appendChild(label);

    });

    quizResult.textContent = "";
}


/* =========================
   LANGUAGE CHANGE
========================= */

languageSelect.addEventListener("change", function() {

    currentQuestion = 0;
    score = 0;

    loadQuestion();

});


/* =========================
   SUBMIT ANSWER
========================= */

submitQuiz.addEventListener("click", function() {

    const selectedAnswer =
        document.querySelector(
            'input[name="answer"]:checked'
        );

    if (!selectedAnswer) {

        quizResult.textContent =
            "⚠️ Please select an answer.";

        quizResult.style.color = "#dc2626";

        return;
    }


    const selectedLanguage = languageSelect.value;

    const questions = quizData[selectedLanguage];

    const correctAnswer =
        questions[currentQuestion].answer;


    /* Check Answer */

    if (selectedAnswer.value === correctAnswer) {

        score++;

        quizResult.textContent =
            "✅ Correct Answer! 🎉";

        quizResult.style.color = "#16a34a";

    } else {

        quizResult.textContent =
            "❌ Wrong Answer. Correct answer: " +
            correctAnswer;

        quizResult.style.color = "#dc2626";

    }


    /* Disable options */

    const allOptions =
        document.querySelectorAll(
            'input[name="answer"]'
        );

    allOptions.forEach(function(option) {

        option.disabled = true;

    });


    /* Next Question */

    setTimeout(function() {

        currentQuestion++;

        if (currentQuestion < 5) {

            loadQuestion();

        } else {

            /* Final Result */

            question.textContent =
                "🎉 Quiz Completed!";

            document.querySelector(".options").innerHTML = "";

            quizResult.innerHTML =
                "🏆 Your Final Score: <strong>" +
                score +
                " / 5</strong>";

            quizResult.style.color = "#23408e";


            /* Try Again Button */

            submitQuiz.textContent =
                "🔄 Try Again";

            submitQuiz.onclick = function() {

                currentQuestion = 0;
                score = 0;

                submitQuiz.textContent =
                    "Submit Answer";

                loadQuestion();

            };

        }

    }, 1000);

});


/* =========================
   START QUIZ
========================= */

loadQuestion();

const languageData = {

    english: {
        title: "🇬🇧 English",
        description: "Learn English for everyday communication.",
        grammar: "Learn sentence structure, tenses and basic grammar.",
        vocabulary: "Learn common English words and daily-use phrases.",
        pronunciation: "Practice English pronunciation and speaking.",
        quiz: "Test your English with grammar and vocabulary quizzes."
    },

    hindi: {
        title: "🇮🇳 Hindi",
        description: "Learn Hindi through simple lessons.",
        grammar: "Learn Hindi sentence formation and grammar.",
        vocabulary: "Learn common Hindi words and phrases.",
        pronunciation: "Practice Hindi pronunciation.",
        quiz: "Test your Hindi vocabulary and grammar."
    },

    marathi: {
        title: "🇮🇳 Marathi",
        description: "Learn Marathi through easy lessons.",
        grammar: "Learn Marathi sentence structure and grammar.",
        vocabulary: "Learn Marathi words and daily-use phrases.",
        pronunciation: "Practice Marathi pronunciation.",
        quiz: "Test your Marathi grammar and vocabulary."
    },

    japanese: {
        title: "🇯🇵 Japanese",
        description: "Learn Japanese vocabulary and conversation.",
        grammar: "Learn particles, verbs and basic Japanese grammar.",
        vocabulary: "Learn useful Japanese words and phrases.",
        pronunciation: "Practice Japanese sounds and pronunciation.",
        quiz: "Test your Japanese grammar and vocabulary."
    },

    korean: {
        title: "🇰🇷 Korean",
        description: "Learn Korean vocabulary and everyday expressions.",
        grammar: "Learn Korean sentence structure and grammar.",
        vocabulary: "Learn Korean words and daily expressions.",
        pronunciation: "Practice Korean pronunciation.",
        quiz: "Test your Korean vocabulary and grammar."
    },

    french: {
        title: "🇫🇷 French",
        description: "Learn French vocabulary and communication.",
        grammar: "Learn French verbs, articles and basic grammar.",
        vocabulary: "Learn French greetings and daily-use phrases.",
        pronunciation: "Practice French pronunciation.",
        quiz: "Test your French grammar and vocabulary."
    },

    german: {
        title: "🇩🇪 German",
        description: "Build German communication skills.",
        grammar: "Learn German sentence structure and grammar.",
        vocabulary: "Learn German words and expressions.",
        pronunciation: "Practice German pronunciation.",
        quiz: "Test your German grammar and vocabulary."
    }

};
function learnLanguage(language) {

    currentLanguage = language;

    const data = languageData[language];

    document.getElementById("languageTitle").innerText = data.title;

    document.getElementById("languageDescription").innerText =
        data.description;

    document.getElementById("grammarText").innerText =
        data.grammar;

    document.getElementById("vocabularyText").innerText =
        data.vocabulary;

    document.getElementById("pronunciationText").innerText =
        data.pronunciation;

    document.getElementById("quizText").innerText =
        data.quiz;

    document.getElementById("languageModal").style.display = "flex";
}
function closeLanguage() {
    document.getElementById("languageModal").style.display = "none";
}
function startLearning() {
    closeLanguage();
const savedProgress = localStorage.getItem(
    "progress_" + currentLanguage
);

const progress = savedProgress ? parseInt(savedProgress) : 0;
    document.getElementById("topicContent").innerHTML = `
        <h2>🚀 Start Learning ${languageData[currentLanguage].title}</h2>

        <p>
            Welcome to your ${languageData[currentLanguage].title} learning journey!
            Choose a topic below to start learning.
        </p>

        <div class="learning-options">

            <div class="learning-option"
                 onclick="openTopic('grammar', currentLanguage)">
                <i class="fa-solid fa-book"></i>
                <h3>Grammar</h3>
                <p>Learn sentence formation, tenses and grammar rules.</p>
            </div>

            <div class="learning-option"
                 onclick="openTopic('vocabulary', currentLanguage)">
                <i class="fa-solid fa-spell-check"></i>
                <h3>Vocabulary</h3>
                <p>Learn useful words and their meanings.</p>
            </div>

            <div class="learning-option"
                 onclick="openTopic('pronunciation', currentLanguage)">
                <i class="fa-solid fa-volume-high"></i>
                <h3>Pronunciation</h3>
                <p>Practice pronunciation of common words.</p>
            </div>

            <div class="learning-option"
                 onclick="startLanguageQuiz(currentLanguage)">
                <i class="fa-solid fa-circle-question"></i>
                <h3>Quiz</h3>
                <p>Test your knowledge with a language quiz.</p>
            </div>
            </div>
<!-- 2️⃣ Learning Progress -->
        <div class="learning-progress">

            <h3>📊 Your Learning Progress</h3>

            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%"></div>
            </div>

            <p>${progress}% Completed</p>
<button class="reset-progress-btn"
        onclick="resetLearningProgress()">
    🔄 Reset Progress
</button>
        </div>

        
    `;

    document.getElementById("topicModal").style.display = "flex";
}

function openTopic(topic, language) {

    let content = "";

    if (topic === "grammar") {

        content = `
            <h2>📘 ${language} Grammar</h2>

            <p>Learn the basic grammar rules of ${language} with simple examples.</p>

            <h3>Grammar Topics</h3>

            <div class="lesson-item"
     onclick="openLesson('sentence', '${language}')">

    <h4>1. Sentence Formation</h4>

    <p>Learn how to create simple and correct sentences.</p>

</div>

                <div class="lesson-item"
     onclick="openLesson('partsOfSpeech', '${language}')">

    <h4>2. Parts of Speech</h4>

    <p>Learn Nouns, Pronouns, Verbs, Adjectives and Adverbs.</p>

</div>

               <div class="lesson-item"
     onclick="openLesson('tenses', '${language}')">

    <h4>3. Tenses</h4>

    <p>Learn Present, Past and Future Tense.</p>

</div>

                <div class="lesson-item"
     onclick="openLesson('articles', '${language}')">

    <h4>4. Articles</h4>

    <p>Learn how to use A, An and The.</p>

</div>

                <div class="lesson-item"
     onclick="openLesson('prepositions', '${language}')">

    <h4>5. Prepositions</h4>

    <p>Learn words such as in, on, at, under and between.</p>

</div>
        `;

    }

   else if (topic === "vocabulary") {

    content = `
        <h2>📚 ${language} Vocabulary</h2>

        <p>
            Learn common and useful ${language} words
            with their meanings and examples.
        </p>

        <h3>🌟 Common Words</h3>

        <div class="vocabulary-list">

            <div class="vocabulary-item">
                <strong>Hello</strong>
                <p>Meaning: A greeting</p>
                <p>Example: Hello, how are you?</p>
            </div>

            <div class="vocabulary-item">
                <strong>Thank You</strong>
                <p>Meaning: Used to express gratitude</p>
                <p>Example: Thank you for your help.</p>
            </div>

            <div class="vocabulary-item">
                <strong>Good Morning</strong>
                <p>Meaning: A greeting used in the morning</p>
                <p>Example: Good morning, everyone.</p>
            </div>

            <div class="vocabulary-item">
                <strong>Goodbye</strong>
                <p>Meaning: Used when leaving</p>
                <p>Example: Goodbye, see you tomorrow.</p>
            </div>

            <div class="vocabulary-item">
                <strong>Friend</strong>
                <p>Meaning: A person you like and trust</p>
                <p>Example: She is my best friend.</p>
            </div>

        </div>
    `;

}

   else if (topic === "pronunciation") {

    content = `
        <h2>🔊 ${language} Pronunciation</h2>

        <p>
            Practice common words and improve your
            ${language} pronunciation.
        </p>

        <h3>🗣️ Pronunciation Practice</h3>

        <div class="pronunciation-list">

            <div class="pronunciation-item">
                <strong>Hello</strong>
                <p>Pronunciation: He-lo</p>
                <p>Meaning: A greeting</p>
            </div>

            <div class="pronunciation-item">
                <strong>Thank You</strong>
                <p>Pronunciation: Thank-yoo</p>
                <p>Meaning: Expression of gratitude</p>
            </div>

            <div class="pronunciation-item">
                <strong>Good Morning</strong>
                <p>Pronunciation: Good-mor-ning</p>
                <p>Meaning: Morning greeting</p>
            </div>

            <div class="pronunciation-item">
                <strong>Goodbye</strong>
                <p>Pronunciation: Good-bye</p>
                <p>Meaning: Used when leaving</p>
            </div>

        </div>
    `;

}

    else if (topic === "quiz") {

    content = `
        <h2>❓ ${language} Quiz</h2>

        <p>
            Test your ${language} grammar and vocabulary skills.
        </p>

        <button class="start-quiz-btn"
                onclick="startLanguageQuiz('${language}')">
            Start ${language} Quiz
        </button>
    `;

}

    document.getElementById("topicContent").innerHTML = content;

    document.getElementById("topicModal").style.display = "flex";
    if (topic === "grammar") {
    updateLearningProgress(25);
}
else if (topic === "vocabulary") {
    updateLearningProgress(50);
}
else if (topic === "pronunciation") {
    updateLearningProgress(75);
}
}
function updateLearningProgress(progress) {

    // Save progress for current language
    localStorage.setItem(
        "progress_" + currentLanguage,
        progress
    );

    const progressFill = document.querySelector(".progress-fill");
    const progressText = document.querySelector(".learning-progress p");

    if (progressFill) {
        progressFill.style.width = progress + "%";
    }

    if (progressText) {
        progressText.innerText = progress + "% Completed";
    }
}
function resetLearningProgress() {

    localStorage.removeItem(
        "progress_" + currentLanguage
    );

    updateLearningProgress(0);

    alert("Progress has been reset to 0%!");
}
function closeTopic() {

    document.getElementById("topicModal").style.display = "none";

}
function openLesson(lesson, language) {

    let content = "";

    if (lesson === "sentence") {

        content = `
            <h2>📝 ${language} - Sentence Formation</h2>

            <p>
                Learn how to make simple and correct sentences
                in ${language}.
            </p>

            <h3>Basic Sentence Structure</h3>

            <div class="lesson-example">
                <strong>Subject + Verb + Object</strong>

                <p>
                    Example: I eat an apple.
                </p>
            </div>

            <h3>Examples</h3>

            <div class="lesson-example">
                <p><strong>1.</strong> I am a student.</p>
                <p><strong>2.</strong> She reads a book.</p>
                <p><strong>3.</strong> He plays cricket.</p>
                <p><strong>4.</strong> They go to school.</p>
            </div>

            <h3>Practice</h3>

            <p>
                Try to create your own sentence using:
            </p>

            <ul>
                <li>I</li>
                <li>She</li>
                <li>They</li>
            </ul>
        `;
    }

    else if (lesson === "partsOfSpeech") {

    content = `
        <h2>📚 ${language} - Parts of Speech</h2>

        <p>
            Parts of Speech are different types of words
            used to make sentences.
        </p>

        <h3>1. Noun</h3>

        <div class="lesson-example">
            <p>A noun is the name of a person, place, animal or thing.</p>
            <p><strong>Examples:</strong> Rahul, Mumbai, Dog, Book</p>
        </div>

        <h3>2. Pronoun</h3>

        <div class="lesson-example">
            <p>A pronoun is used instead of a noun.</p>
            <p><strong>Examples:</strong> I, You, He, She, They</p>
        </div>

        <h3>3. Verb</h3>

        <div class="lesson-example">
            <p>A verb shows an action or state.</p>
            <p><strong>Examples:</strong> Run, Eat, Read, Write</p>
        </div>

        <h3>4. Adjective</h3>

        <div class="lesson-example">
            <p>An adjective describes a noun.</p>
            <p><strong>Examples:</strong> Beautiful, Big, Small, Smart</p>
        </div>

        <h3>5. Adverb</h3>

        <div class="lesson-example">
            <p>An adverb describes a verb or action.</p>
            <p><strong>Examples:</strong> Slowly, Quickly, Carefully</p>
        </div>
    `;
}
else if (lesson === "tenses") {

    content = `
        <h2>⏰ ${language} - Tenses</h2>

        <p>
            Tenses tell us when an action happens.
        </p>

        <h3>1. Present Tense</h3>

        <div class="lesson-example">
            <p>Used for actions that happen now or regularly.</p>

            <p><strong>Example:</strong> I eat an apple.</p>

            <p><strong>Example:</strong> She goes to school.</p>
        </div>

        <h3>2. Past Tense</h3>

        <div class="lesson-example">
            <p>Used for actions that happened in the past.</p>

            <p><strong>Example:</strong> I ate an apple.</p>

            <p><strong>Example:</strong> She went to school.</p>
        </div>

        <h3>3. Future Tense</h3>

        <div class="lesson-example">
            <p>Used for actions that will happen in the future.</p>

            <p><strong>Example:</strong> I will eat an apple.</p>

            <p><strong>Example:</strong> She will go to school.</p>
        </div>

        <h3>💡 Quick Practice</h3>

        <div class="lesson-example">
            <p><strong>Present:</strong> I play cricket.</p>
            <p><strong>Past:</strong> I played cricket.</p>
            <p><strong>Future:</strong> I will play cricket.</p>
        </div>
    `;
}
else if (lesson === "articles") {

    content = `
        <h2>📖 ${language} - Articles</h2>

        <p>
            Articles are used before nouns.
            The three articles are <strong>A, An</strong> and <strong>The</strong>.
        </p>

        <h3>1. A</h3>

        <div class="lesson-example">
            <p>Use <strong>A</strong> before a consonant sound.</p>

            <p><strong>Examples:</strong></p>
            <p>• A book</p>
            <p>• A car</p>
            <p>• A student</p>
        </div>

        <h3>2. An</h3>

        <div class="lesson-example">
            <p>Use <strong>An</strong> before a vowel sound.</p>

            <p><strong>Examples:</strong></p>
            <p>• An apple</p>
            <p>• An egg</p>
            <p>• An umbrella</p>
        </div>

        <h3>3. The</h3>

        <div class="lesson-example">
            <p>Use <strong>The</strong> for a specific person, place or thing.</p>

            <p><strong>Examples:</strong></p>
            <p>• The sun</p>
            <p>• The book on the table</p>
            <p>• The school near my house</p>
        </div>

        <h3>💡 Quick Practice</h3>

        <div class="lesson-example">
            <p>1. I have ___ apple.</p>
            <p>2. She has ___ book.</p>
            <p>3. ___ sun is bright.</p>
        </div>
    `;
}
else if (lesson === "prepositions") {

    content = `
        <h2>📍 ${language} - Prepositions</h2>

        <p>
            Prepositions show the relationship between
            a person, place, thing or action.
        </p>

        <h3>1. In</h3>

        <div class="lesson-example">
            <p><strong>Meaning:</strong> Inside something.</p>
            <p><strong>Example:</strong> The book is in the bag.</p>
        </div>

        <h3>2. On</h3>

        <div class="lesson-example">
            <p><strong>Meaning:</strong> On the surface of something.</p>
            <p><strong>Example:</strong> The book is on the table.</p>
        </div>

        <h3>3. At</h3>

        <div class="lesson-example">
            <p><strong>Meaning:</strong> A specific place or time.</p>
            <p><strong>Example:</strong> I am at school.</p>
        </div>

        <h3>4. Under</h3>

        <div class="lesson-example">
            <p><strong>Meaning:</strong> Below something.</p>
            <p><strong>Example:</strong> The cat is under the table.</p>
        </div>

        <h3>5. Between</h3>

        <div class="lesson-example">
            <p><strong>Meaning:</strong> In the middle of two things.</p>
            <p><strong>Example:</strong> The shop is between two buildings.</p>
        </div>

        <h3>💡 Quick Practice</h3>

        <div class="lesson-example">
            <p>1. The pen is ___ the table.</p>
            <p>2. The cat is ___ the chair.</p>
            <p>3. I am ___ school.</p>
        </div>
    `;
}
 document.getElementById("topicContent").innerHTML = content;

    document.getElementById("topicModal").style.display = "flex";
}


const englishQuestions = [
    {
        question: 'What is the opposite of "Good"?',
        options: ["Bad", "Better", "Best", "Nice"],
        answer: "Bad"
    },
    {
        question: 'Which word is a noun?',
        options: ["Run", "Beautiful", "Book", "Quickly"],
        answer: "Book"
    },
    {
        question: 'Choose the correct article: ___ apple',
        options: ["A", "An", "The", "No article"],
        answer: "An"
    },
    {
        question: 'Which sentence is in the past tense?',
        options: [
            "I eat food.",
            "I am eating food.",
            "I ate food.",
            "I will eat food."
        ],
        answer: "I ate food."
    },
    {
        question: 'Choose the correct preposition: The book is ___ the table.',
        options: ["in", "on", "at", "under"],
        answer: "on"
    }
];
const hindiQuestions = [
    {
        question: '"Namaste" is a greeting in which language?',
        options: ["Hindi", "French", "German", "Japanese"],
        answer: "Hindi"
    },
    {
        question: '"Dhanyavaad" means?',
        options: ["Hello", "Thank You", "Goodbye", "Sorry"],
        answer: "Thank You"
    },
    {
        question: '"Paani" means?',
        options: ["Food", "Water", "Book", "House"],
        answer: "Water"
    },
    {
        question: '"Namaskar" means?',
        options: ["Hello", "Goodbye", "Sorry", "Thank You"],
        answer: "Hello"
    },
    {
        question: '"Mata" means?',
        options: ["Father", "Mother", "Brother", "Sister"],
        answer: "Mother"
    }
];
const marathiQuestions = [
    {
        question: '"Namaskar" means?',
        options: ["Hello", "Goodbye", "Thank You", "Sorry"],
        answer: "Hello"
    },
    {
        question: '"Dhanyavaad" means?',
        options: ["Thank You", "Hello", "Goodbye", "Welcome"],
        answer: "Thank You"
    },
    {
        question: '"Paani" means?',
        options: ["Water", "Food", "House", "Book"],
        answer: "Water"
    },
    {
        question: '"Aai" means?',
        options: ["Father", "Mother", "Brother", "Sister"],
        answer: "Mother"
    },
    {
        question: '"Shala" means?',
        options: ["School", "House", "Garden", "Market"],
        answer: "School"
    }
];
const japaneseQuestions = [
    {
        question: '"Konnichiwa" means?',
        options: ["Hello", "Goodbye", "Thank You", "Sorry"],
        answer: "Hello"
    },
    {
        question: '"Arigatou" means?',
        options: ["Thank You", "Hello", "Good Morning", "Goodbye"],
        answer: "Thank You"
    },
    {
        question: '"Mizu" means?',
        options: ["Water", "Food", "Book", "House"],
        answer: "Water"
    },
    {
        question: '"Ohayou" means?',
        options: ["Good Morning", "Good Night", "Goodbye", "Hello"],
        answer: "Good Morning"
    },
    {
        question: '"Sensei" means?',
        options: ["Teacher", "Student", "Friend", "Doctor"],
        answer: "Teacher"
    }
];
const frenchQuestions = [
    {
        question: '"Bonjour" means?',
        options: ["Hello", "Goodbye", "Thank You", "Sorry"],
        answer: "Hello"
    },
    {
        question: '"Merci" means?',
        options: ["Thank You", "Hello", "Good Morning", "Goodbye"],
        answer: "Thank You"
    },
    {
        question: '"Eau" means?',
        options: ["Water", "Food", "Book", "House"],
        answer: "Water"
    },
    {
        question: '"Au revoir" means?',
        options: ["Goodbye", "Hello", "Thank You", "Sorry"],
        answer: "Goodbye"
    },
    {
        question: '"Ami" means?',
        options: ["Friend", "Teacher", "Student", "Doctor"],
        answer: "Friend"
    }
];
const germanQuestions = [
    {
        question: '"Hallo" means?',
        options: ["Hello", "Goodbye", "Thank You", "Sorry"],
        answer: "Hello"
    },
    {
        question: '"Danke" means?',
        options: ["Thank You", "Hello", "Good Morning", "Goodbye"],
        answer: "Thank You"
    },
    {
        question: '"Wasser" means?',
        options: ["Water", "Food", "Book", "House"],
        answer: "Water"
    },
    {
        question: '"Auf Wiedersehen" means?',
        options: ["Goodbye", "Hello", "Thank You", "Sorry"],
        answer: "Goodbye"
    },
    {
        question: '"Freund" means?',
        options: ["Friend", "Teacher", "Student", "Doctor"],
        answer: "Friend"
    }
];
let languageQuizQuestion = 0;
let languageQuizScore = 0;
let currentQuizQuestions = [];


function startLanguageQuiz(language) {

    if (language === "english") {
        currentQuizQuestions = englishQuestions;
    }
    else if (language === "hindi") {
        currentQuizQuestions = hindiQuestions;
    }
    else if (language === "marathi") {
    currentQuizQuestions = marathiQuestions;
}
else if (language === "japanese") {
    currentQuizQuestions = japaneseQuestions;
}
else if (language === "korean") {
    currentQuizQuestions = koreanQuestions;
}
else if (language === "french") {
    currentQuizQuestions = frenchQuestions;
}
else if (language === "german") {
    currentQuizQuestions = germanQuestions;
}
    else {
        document.getElementById("topicContent").innerHTML = `
            <h2>❓ ${language} Quiz</h2>
            <p>Quiz for ${language} will be available soon.</p>
        `;

        document.getElementById("topicModal").style.display = "flex";
        return;
    }

    languageQuizQuestion = 0;
    languageQuizScore = 0;

    showLanguageQuestion(language);
}


function showLanguageQuestion(language) {

    const q = currentQuizQuestions[languageQuizQuestion];

    let quizHTML = `
        <h2>❓ ${language} Quiz</h2>

        <div class="quiz-question">

            <h3>
                ${languageQuizQuestion + 1}.
                ${q.question}
            </h3>

            <div class="quiz-options">
    `;

    q.options.forEach(function(option) {

        quizHTML += `
            <button onclick="checkLanguageAnswer(this, '${option}')">
                ${option}
            </button>
        `;

    });

    quizHTML += `
            </div>

            <p id="languageQuizResult"></p>

            <button id="nextLanguageQuestion"
                    class="start-quiz-btn"
                    onclick="nextLanguageQuestion('${language}')"
                    style="display:none;">
                Next →
            </button>

        </div>
    `;

    document.getElementById("topicContent").innerHTML = quizHTML;

    document.getElementById("topicModal").style.display = "flex";
}


function checkLanguageAnswer(button, selectedAnswer) {

    const q = currentQuizQuestions[languageQuizQuestion];

    const result =
        document.getElementById("languageQuizResult");

    const allButtons =
        document.querySelectorAll(".quiz-options button");

    allButtons.forEach(function(btn) {
        btn.disabled = true;
    });


    if (selectedAnswer === q.answer) {

        result.innerHTML = "✅ Correct Answer!";
        languageQuizScore++;

    }
    else {

        result.innerHTML =
            "❌ Wrong Answer! Correct answer is: " + q.answer;
    }


    document.getElementById("nextLanguageQuestion")
        .style.display = "block";
}


function nextLanguageQuestion(language) {

    languageQuizQuestion++;

    if (languageQuizQuestion < currentQuizQuestions.length) {

        showLanguageQuestion(language);

    }
    else {

        showLanguageFinalScore(language);
    }
}


function showLanguageFinalScore(language) {

    document.getElementById("topicContent").innerHTML = `

        <div class="quiz-result-box">

            <h2>🎉 Quiz Completed!</h2>

            <p>Your Score</p>

            <h1>
                ${languageQuizScore} /
                ${currentQuizQuestions.length}
            </h1>

            <p>
                ${getLanguageQuizMessage()}
            </p>

            <button class="start-quiz-btn"
                    onclick="startLanguageQuiz('${language}')">
                🔄 Try Again
            </button>

        </div>
    `;
    updateLearningProgress(100);
}


function getLanguageQuizMessage() {

    if (languageQuizScore === currentQuizQuestions.length) {

        return "🌟 Excellent! Perfect Score!";

    }
    else if (languageQuizScore >= 3) {

        return "👏 Good Job! Keep Practicing!";

    }
    else {

        return "💪 Keep Learning and Try Again!";
    }
}