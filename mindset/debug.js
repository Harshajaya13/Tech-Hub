const contentDB = {
            'stuck': {
                tag: 'ERR_LOOP_3HR',
                title: 'The Illusion of Stagnation',
                text: 'You have been staring at the same red error line for 180 minutes. The cursor blinks mockingly. You feel like you are not making progress and that "real" developers do not get stuck like this.',
                truth: 'Getting stuck is the job. Senior engineers spend 60% of their time debugging. You are not failing; you are working. The code is not broken; your understanding of it is just incomplete.',
                fix: 'Stop coding immediately. Stand up. Walk away for 10 minutes. When you return, explain the code line-by-line to a rubber duck (or an empty chair). The answer usually appears when you force yourself to articulate the problem verbally.'
            },
            'comparison': {
                tag: 'DEP_CONFLICT_FOMO',
                title: 'The LinkedIn Distortion Field',
                text: 'You scroll and see peers posting about internships at Amazon and Google. A pit forms in your stomach. You feel like the race has already started and you are still tying your shoes.',
                truth: 'LinkedIn is a curated highlight reel. You do not see their rejection emails, their sleepless nights, or their doubts. Comparing your Chapter 1 to someone else\'s Chapter 10 is illogical.',
                fix: 'Mute the noise. Focus on your local git commit graph. If you commit code every day for 30 days, you will be statistically ahead of 90% of the people posting on LinkedIn.'
            },
            'quitter': {
                tag: 'FATAL_CONFIDENCE',
                title: 'Imposter Syndrome',
                text: 'The logic feels too complex. You look at a recursive function and your brain goes blank. You suspect you simply do not have the "gene" for this.',
                truth: 'Coding is difficult by design. If it were easy, the market value would be zero. Every programmer feels stupid at least once a day. It is a feature, not a bug.',
                fix: 'Adopt the "Growth Mindset". Replace "I can\'t do this" with "I can\'t do this YET". Deconstruct the problem into smaller, simpler pieces until you find a piece you can solve.'
            },
            'fail': {
                tag: 'PROCESS_FAILED',
                title: 'System Failure',
                text: 'You failed a contest, an exam, or an interview. The rejection feels personal and final.',
                truth: 'Failure is simply data collection. In AI, a neural network learns by failing millions of times. You are currently training your own model.',
                fix: 'Do a "Post-Mortem". Do not wallow in emotion. Analyze exactly why the crash occurred (Syntax? Logic? Speed?). Patch that specific bug and re-deploy.'
            },
            'memory': {
                tag: 'MEM_LEAK',
                title: 'Syntax Amnesia',
                text: 'You forget how to write a simple For Loop without Google. You worry your memory isn\'t good enough.',
                truth: 'Memorization is for historians, not engineers. Understanding logic is far more important than remembering syntax. External documentation is a tool, not a crutch.',
                fix: 'Stop trying to memorize. Start building. You retain what you utilize. Keep documentation open on a secondary tab. It is not cheating; it is reference.'
            },
            'family': {
                tag: 'EXT_PRESSURE',
                title: 'The Legacy Burden',
                text: 'The fear of disappointing your parents is occupying 80% of your RAM. You cannot focus on the code because you are focusing on the consequences.',
                truth: 'You cannot code with a gun to your head. Fear kills creativity and high-level logic.',
                fix: 'Detach from the output. Focus on the input. Tell yourself: "I will study for 2 hours today." That is a variable you control. The result is an external variable.'
            }
        };

        function showStory(id) {
            const data = contentDB[id];
            
            document.getElementById('scenario-tag').innerText = data.tag;
            document.getElementById('story-title').innerText = data.title;
            document.getElementById('story-text').innerText = data.text;
            document.getElementById('story-truth').innerText = data.truth;
            document.getElementById('story-fix').innerText = data.fix;

            document.getElementById('selection-screen').classList.remove('active');
            document.getElementById('selection-screen').classList.add('hidden');
            
            setTimeout(() => {
                document.getElementById('story-screen').classList.remove('hidden');
                document.getElementById('story-screen').classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
        }

        function goBack() {
            document.getElementById('story-screen').classList.remove('active');
            document.getElementById('story-screen').classList.add('hidden');
            
            setTimeout(() => {
                document.getElementById('selection-screen').classList.remove('hidden');
                document.getElementById('selection-screen').classList.add('active');
            }, 100);
        }