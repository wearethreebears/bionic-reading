const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
    const words = paragraph.innerHTML.split(' ');
    const bionicWords = words.map(word => {
        const half = Math.ceil(word.length / 2);
        const firstHalf = word.slice(0, half);
        
        const secondHalf = word.length === 1 ? '' : word.length % 2 === 0 ? word.slice(-half) : word.slice(-half + 1);

        const wrappedFirstHalf = `<span class="bionic">${firstHalf}</span>`;
        const bionicWord = `${wrappedFirstHalf}${secondHalf}`;

        return bionicWord;
    });

    paragraph.innerHTML = bionicWords.join(' ');
})