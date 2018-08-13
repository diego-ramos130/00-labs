##### How did you determine which rules should be placed in each new CSS file?

(Put your answer here)
I tried to adhere to SMACSS guidelines and what was told to me. This isn't a concept I grasp too well, but semantically what I put where makes sense to me. For example, `main p` is in layout.css, because that css rule dictates the appearance and therefore the positioning/look of main. I put anything that was a descendant of an existing css rule in module.css, and i put `*` stuff in base.css. 
This is pretty fuzzy for me, though.

---

##### Did you do any refactoring of the existing CSS? If so, briefly explain what you did and why.

(Put your answer here)
I didn't refactor anything. 
