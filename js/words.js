// Words database for both kids and adults versions
const wordsDatabase = {
    kids: {
        easy: [
            { word: "cat", hint: "A furry pet that meows" },
            { word: "dog", hint: "A loyal pet that barks" },
            { word: "sun", hint: "It shines during the day" },
            { word: "hat", hint: "You wear it on your head" },
            { word: "ball", hint: "A round toy you can throw" },
            { word: "fish", hint: "It swims in water" },
            { word: "cake", hint: "A sweet dessert for birthdays" },
            { word: "bird", hint: "It has wings and can fly" },
            { word: "frog", hint: "It jumps and says ribbit" },
            { word: "star", hint: "Twinkle twinkle in the sky" },
            { word: "pig", hint: "A pink farm animal that says oink" },
            { word: "book", hint: "It has pages with stories" },
            { word: "milk", hint: "White drink that comes from cows" },
            { word: "kite", hint: "It flies in the sky on a string" },
            { word: "duck", hint: "A bird that swims and quacks" },
            { word: "bee", hint: "It makes honey and can sting" },
            { word: "car", hint: "A vehicle with four wheels" },
            { word: "pen", hint: "You write with it" },
            { word: "cup", hint: "You drink from it" },
            { word: "tree", hint: "It has branches and leaves" },
            { word: "bear", hint: "A big furry forest animal" },
            { word: "moon", hint: "Glows in the night sky" },
            { word: "rain", hint: "Water falling from clouds" },
            { word: "sock", hint: "You wear it on your feet" },
            { word: "ship", hint: "Floats on water to travel" },
            { word: "leaf", hint: "Green part of a tree" },
            { word: "nest", hint: "Birds make this their home" },
            { word: "ring", hint: "A circular piece of jewelry" },
            { word: "snow", hint: "Cold white flakes from the sky" },
            { word: "toy", hint: "Something fun to play with" }
        ],
        medium: [
            { word: "apple", hint: "A red or green fruit" },
            { word: "train", hint: "It runs on tracks" },
            { word: "house", hint: "A place where people live" },
            { word: "pizza", hint: "A round food with cheese on top" },
            { word: "tiger", hint: "A big cat with stripes" },
            { word: "candy", hint: "Sweet treats kids love" },
            { word: "robot", hint: "A machine that can move" },
            { word: "ocean", hint: "A very large body of water" },
            { word: "flower", hint: "It grows in gardens and smells nice" },
            { word: "monkey", hint: "An animal that likes bananas" },
            { word: "pencil", hint: "You use it to draw and write" },
            { word: "rabbit", hint: "A furry animal with long ears" },
            { word: "rocket", hint: "It flies to space" },
            { word: "dragon", hint: "A mythical creature that breathes fire" },
            { word: "jacket", hint: "You wear it to stay warm" },
            { word: "planet", hint: "Earth is one of these" },
            { word: "garden", hint: "A place where plants grow" },
            { word: "basket", hint: "A container made of woven material" },
            { word: "winter", hint: "The cold season with snow" },
            { word: "puppet", hint: "A toy you can move with your hand" },
            { word: "castle", hint: "Where kings and queens live" },
            { word: "jungle", hint: "A forest with lots of wild animals" },
            { word: "island", hint: "Land surrounded by water" },
            { word: "school", hint: "Place where children learn" },
            { word: "bridge", hint: "Helps you cross over water" },
            { word: "circus", hint: "Show with clowns and acrobats" },
            { word: "forest", hint: "Many trees growing together" },
            { word: "museum", hint: "Place with interesting old things" },
            { word: "picnic", hint: "Eating outdoors for fun" },
            { word: "sunset", hint: "When the sun goes down" }
        ],
        hard: [
            { word: "giraffe", hint: "Animal with a very long neck" },
            { word: "balloon", hint: "It floats in the air at parties" },
            { word: "puzzle", hint: "A game with pieces to fit together" },
            { word: "rainbow", hint: "Colorful arc in the sky after rain" },
            { word: "elephant", hint: "Large gray animal with a trunk" },
            { word: "dinosaur", hint: "Ancient reptile that no longer exists" },
            { word: "butterfly", hint: "Insect with colorful wings" },
            { word: "pineapple", hint: "Tropical fruit with a spiky top" },
            { word: "chocolate", hint: "Sweet brown treat made from cocoa" },
            { word: "snowflake", hint: "Tiny ice crystal that falls from the sky" },
            { word: "telescope", hint: "Instrument used to see distant objects" },
            { word: "adventure", hint: "An exciting experience" },
            { word: "astronaut", hint: "Person who travels to space" },
            { word: "watermelon", hint: "Large green fruit with red inside" },
            { word: "playground", hint: "Place with swings and slides" },
            { word: "sunflower", hint: "Tall yellow flower that follows the sun" },
            { word: "kangaroo", hint: "Animal that hops and has a pouch" },
            { word: "submarine", hint: "Vehicle that goes underwater" },
            { word: "caterpillar", hint: "It turns into a butterfly" },
            { word: "helicopter", hint: "Aircraft with spinning blades on top" },
            { word: "aquarium", hint: "Glass home for fish" },
            { word: "orchestra", hint: "Large group of musicians" },
            { word: "parachute", hint: "Helps you float down from the sky" },
            { word: "unicycle", hint: "Bike with just one wheel" },
            { word: "flamingo", hint: "Pink bird that stands on one leg" },
            { word: "telescope", hint: "Tool to see far away things" },
            { word: "umbrella", hint: "Keeps you dry in the rain" },
            { word: "xylophone", hint: "Musical instrument you hit with sticks" },
            { word: "volleyball", hint: "Game where you hit a ball over a net" },
            { word: "ladybug", hint: "Red insect with black spots" }
        ]
    },
    adults: {
        easy: [
            { word: "irony", hint: "When reality contradicts expectations" },
            { word: "quirky", hint: "Peculiar but in an endearing way" },
            { word: "facade", hint: "A deceptive outward appearance" },
            { word: "malaise", hint: "A general feeling of discomfort" },
            { word: "cynical", hint: "Believing people are motivated by self-interest" },
            { word: "entropy", hint: "The gradual decline into disorder" },
            { word: "apathy", hint: "Lack of interest or concern" },
            { word: "paradox", hint: "A statement that contradicts itself" },
            { word: "sarcasm", hint: "Cutting remarks meant to mock" },
            { word: "mundane", hint: "Lacking excitement; dull" },
            { word: "ennui", hint: "Feeling of weariness from existence" },
            { word: "jaded", hint: "Tired, bored, or lacking enthusiasm" },
            { word: "stoic", hint: "Person who can endure pain without showing feelings" },
            { word: "futile", hint: "Incapable of producing any result" },
            { word: "banal", hint: "So lacking in originality as to be obvious" },
            { word: "angst", hint: "Feeling of deep anxiety or dread" },
            { word: "anomie", hint: "Lack of moral guidance in society" },
            { word: "dreary", hint: "Dull, bleak, and lifeless" },
            { word: "hollow", hint: "Having a hole or empty space inside" },
            { word: "vacant", hint: "Empty or unoccupied" },
            { word: "cipher", hint: "A person or thing of no importance" },
            { word: "folly", hint: "Lack of good sense or judgment" },
            { word: "hubris", hint: "Excessive pride or self-confidence" },
            { word: "inert", hint: "Lacking the ability to move" },
            { word: "lucid", hint: "Clear and easily understood" },
            { word: "mirth", hint: "Happiness accompanied by laughter" },
            { word: "naive", hint: "Showing lack of experience" },
            { word: "petty", hint: "Of little importance" },
            { word: "quaint", hint: "Attractively old-fashioned" },
            { word: "zeal", hint: "Great energy or enthusiasm" }
        ],
        medium: [
            { word: "dystopia", hint: "An imagined state of great suffering" },
            { word: "quagmire", hint: "A difficult or precarious situation" },
            { word: "nihilism", hint: "The rejection of all religious and moral principles" },
            { word: "mortality", hint: "The state of being subject to death" },
            { word: "solitude", hint: "The state of being alone" },
            { word: "existential", hint: "Relating to existence and human purpose" },
            { word: "melancholy", hint: "A feeling of pensive sadness" },
            { word: "ephemeral", hint: "Lasting for a very short time" },
            { word: "ambivalent", hint: "Having mixed feelings about something" },
            { word: "catharsis", hint: "The process of releasing strong emotions" },
            { word: "purgatory", hint: "A place of temporary suffering" },
            { word: "oblivion", hint: "The state of being forgotten" },
            { word: "poignant", hint: "Evoking a keen sense of sadness" },
            { word: "forlorn", hint: "Pitifully sad and abandoned" },
            { word: "nostalgia", hint: "Sentimental longing for the past" },
            { word: "pensive", hint: "Engaged in deep or serious thought" },
            { word: "somber", hint: "Dark or dull in color or tone" },
            { word: "laconic", hint: "Using very few words" },
            { word: "lethargic", hint: "Lacking energy; sluggish" },
            { word: "wistful", hint: "Full of yearning or desire" },
            { word: "cynicism", hint: "Believing people are selfish and dishonest" },
            { word: "ethereal", hint: "Extremely delicate and light" },
            { word: "fatalism", hint: "Belief that events are predetermined" },
            { word: "hedonism", hint: "Pursuit of pleasure as a way of life" },
            { word: "insidious", hint: "Proceeding in a gradual, harmful way" },
            { word: "paradigm", hint: "A typical example or pattern" },
            { word: "rhetoric", hint: "Language designed to persuade" },
            { word: "synthesis", hint: "Combination of different ideas" },
            { word: "temporal", hint: "Relating to worldly affairs" },
            { word: "vicarious", hint: "Experienced through another" }
        ],
        hard: [
            { word: "absurdism", hint: "The conflict between seeking meaning in a meaningless world" },
            { word: "juxtaposition", hint: "Placing contrasting things close together" },
            { word: "serendipity", hint: "Finding something good without looking for it" },
            { word: "existentialism", hint: "Philosophy emphasizing individual existence and freedom" },
            { word: "schadenfreude", hint: "Pleasure derived from another's misfortune" },
            { word: "misanthrope", hint: "A person who dislikes humankind" },
            { word: "despondency", hint: "Severe hopelessness and dejection" },
            { word: "introspection", hint: "Examining one's own thoughts and feelings" },
            { word: "disillusionment", hint: "Freedom from false beliefs" },
            { word: "transcendence", hint: "Existence beyond the physical world" },
            { word: "weltschmerz", hint: "Sadness from comparing the world as it is with how it should be" },
            { word: "verisimilitude", hint: "The appearance of being true or real" },
            { word: "solipsism", hint: "The view that the self is all that can be known to exist" },
            { word: "mellifluous", hint: "Sweet or musical; pleasant to hear" },
            { word: "quintessential", hint: "Representing the most perfect example of a quality" },
            { word: "perspicacious", hint: "Having keen mental perception and understanding" },
            { word: "discombobulate", hint: "To confuse or disconcert" },
            { word: "circumlocution", hint: "Using many words where fewer would do" },
            { word: "pusillanimous", hint: "Showing a lack of courage or determination" },
            { word: "antediluvian", hint: "Extremely old-fashioned or outdated" },
            { word: "epistemology", hint: "Study of the nature of knowledge" },
            { word: "hermeneutics", hint: "Theory and method of interpretation" },
            { word: "ineffable", hint: "Too great to be expressed in words" },
            { word: "mercurial", hint: "Subject to sudden changes of mood" },
            { word: "obfuscation", hint: "Making something unclear or confusing" },
            { word: "phantasmagoria", hint: "A sequence of real or imaginary images" },
            { word: "recalcitrant", hint: "Having an obstinately uncooperative attitude" },
            { word: "surreptitious", hint: "Kept secret, especially because improper" },
            { word: "ubiquitous", hint: "Present, appearing, or found everywhere" },
            { word: "zeitgeist", hint: "The defining spirit of a particular period" }
        ]
    }
};

// Rewards for kids version
const kidsRewards = [
    { 
        name: "Star Badge", 
        baseImage: "images/rewards/star.svg",
        variants: {
            easy: { name: "Bronze Star Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Star Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Star Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Cake Badge", 
        baseImage: "images/rewards/cake.svg",
        variants: {
            easy: { name: "Bronze Cake Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Cake Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Cake Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Balloon Badge", 
        baseImage: "images/rewards/balloon.svg",
        variants: {
            easy: { name: "Bronze Balloon Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Balloon Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Balloon Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Rainbow Badge", 
        baseImage: "images/rewards/rainbow.svg",
        variants: {
            easy: { name: "Bronze Rainbow Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Rainbow Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Rainbow Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Dinosaur Badge", 
        baseImage: "images/rewards/dinosaur.svg",
        variants: {
            easy: { name: "Bronze Dinosaur Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Dinosaur Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Dinosaur Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Rocket Badge", 
        baseImage: "images/rewards/rocket.svg",
        variants: {
            easy: { name: "Bronze Rocket Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Rocket Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Rocket Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Crown Badge", 
        baseImage: "images/rewards/crown.svg",
        variants: {
            easy: { name: "Bronze Crown Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Crown Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Crown Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Unicorn Badge", 
        baseImage: "images/rewards/unicorn.svg",
        variants: {
            easy: { name: "Bronze Unicorn Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Unicorn Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Unicorn Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Dragon Badge", 
        baseImage: "images/rewards/dragon.svg",
        variants: {
            easy: { name: "Bronze Dragon Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Dragon Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Dragon Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Robot Badge", 
        baseImage: "images/rewards/robot.svg",
        variants: {
            easy: { name: "Bronze Robot Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Robot Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Robot Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Pirate Badge", 
        baseImage: "images/rewards/pirate.svg",
        variants: {
            easy: { name: "Bronze Pirate Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Pirate Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Pirate Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Astronaut Badge", 
        baseImage: "images/rewards/astronaut.svg",
        variants: {
            easy: { name: "Bronze Astronaut Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Astronaut Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Astronaut Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Wizard Badge", 
        baseImage: "images/rewards/wizard.svg",
        variants: {
            easy: { name: "Bronze Wizard Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Wizard Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Wizard Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Superhero Badge", 
        baseImage: "images/rewards/superhero.svg",
        variants: {
            easy: { name: "Bronze Superhero Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Superhero Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Superhero Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Princess Badge", 
        baseImage: "images/rewards/princess.svg",
        variants: {
            easy: { name: "Bronze Princess Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Princess Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Princess Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Knight Badge", 
        baseImage: "images/rewards/knight.svg",
        variants: {
            easy: { name: "Bronze Knight Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Knight Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Knight Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Mermaid Badge", 
        baseImage: "images/rewards/mermaid.svg",
        variants: {
            easy: { name: "Bronze Mermaid Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Mermaid Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Mermaid Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Alien Badge", 
        baseImage: "images/rewards/alien.svg",
        variants: {
            easy: { name: "Bronze Alien Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Alien Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Alien Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Treasure Badge", 
        baseImage: "images/rewards/treasure.svg",
        variants: {
            easy: { name: "Bronze Treasure Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Treasure Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Treasure Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Candy Badge", 
        baseImage: "images/rewards/candy.svg",
        variants: {
            easy: { name: "Bronze Candy Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Candy Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Candy Badge", stroke: "#FFD700" }
        }
    }
];

// Funny quotes for adults version
const adultQuotes = [
    "Life is absurd. Why not embrace it?",
    "In the end, we all become a grave.",
    "Congratulations on temporarily escaping existential dread!",
    "You've won this round against the void.",
    "Your vocabulary is impressive. Your existence is still meaningless.",
    "Even in victory, we're all just walking toward our demise.",
    "Well done! The universe remains indifferent to your achievement.",
    "You've successfully distracted yourself from the inevitable.",
    "Words won't save you, but they're a nice distraction.",
    "Impressive. Now back to contemplating the void."
];

// Rewards for adults version
const adultRewards = [
    { 
        name: "Coffee Badge", 
        baseImage: "images/rewards/adult/coffee.svg",
        variants: {
            easy: { name: "Bronze Coffee Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Coffee Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Coffee Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Book Badge", 
        baseImage: "images/rewards/adult/book.svg",
        variants: {
            easy: { name: "Bronze Book Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Book Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Book Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Wine Badge", 
        baseImage: "images/rewards/adult/wine.svg",
        variants: {
            easy: { name: "Bronze Wine Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Wine Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Wine Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Briefcase Badge", 
        baseImage: "images/rewards/adult/briefcase.svg",
        variants: {
            easy: { name: "Bronze Briefcase Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Briefcase Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Briefcase Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Glasses Badge", 
        baseImage: "images/rewards/adult/glasses.svg",
        variants: {
            easy: { name: "Bronze Glasses Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Glasses Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Glasses Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Newspaper Badge", 
        baseImage: "images/rewards/adult/newspaper.svg",
        variants: {
            easy: { name: "Bronze Newspaper Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Newspaper Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Newspaper Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Clock Badge", 
        baseImage: "images/rewards/adult/clock.svg",
        variants: {
            easy: { name: "Bronze Clock Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Clock Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Clock Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Tie Badge", 
        baseImage: "images/rewards/adult/tie.svg",
        variants: {
            easy: { name: "Bronze Tie Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Tie Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Tie Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Laptop Badge", 
        baseImage: "images/rewards/adult/laptop.svg",
        variants: {
            easy: { name: "Bronze Laptop Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Laptop Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Laptop Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Headphones Badge", 
        baseImage: "images/rewards/adult/headphones.svg",
        variants: {
            easy: { name: "Bronze Headphones Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Headphones Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Headphones Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Cigar Badge", 
        baseImage: "images/rewards/adult/cigar.svg",
        variants: {
            easy: { name: "Bronze Cigar Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Cigar Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Cigar Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Whiskey Badge", 
        baseImage: "images/rewards/adult/whiskey.svg",
        variants: {
            easy: { name: "Bronze Whiskey Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Whiskey Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Whiskey Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Wallet Badge", 
        baseImage: "images/rewards/adult/wallet.svg",
        variants: {
            easy: { name: "Bronze Wallet Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Wallet Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Wallet Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Keys Badge", 
        baseImage: "images/rewards/adult/keys.svg",
        variants: {
            easy: { name: "Bronze Keys Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Keys Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Keys Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Pen Badge", 
        baseImage: "images/rewards/adult/pen.svg",
        variants: {
            easy: { name: "Bronze Pen Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Pen Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Pen Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Pipe Badge", 
        baseImage: "images/rewards/adult/pipe.svg",
        variants: {
            easy: { name: "Bronze Pipe Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Pipe Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Pipe Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Watch Badge", 
        baseImage: "images/rewards/adult/watch.svg",
        variants: {
            easy: { name: "Bronze Watch Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Watch Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Watch Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Martini Badge", 
        baseImage: "images/rewards/adult/martini.svg",
        variants: {
            easy: { name: "Bronze Martini Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Martini Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Martini Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Typewriter Badge", 
        baseImage: "images/rewards/adult/typewriter.svg",
        variants: {
            easy: { name: "Bronze Typewriter Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Typewriter Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Typewriter Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Journal Badge", 
        baseImage: "images/rewards/adult/journal.svg",
        variants: {
            easy: { name: "Bronze Journal Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Journal Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Journal Badge", stroke: "#FFD700" }
        }
    },
    { 
        name: "Monocle Badge", 
        baseImage: "images/rewards/adult/monocle.svg",
        variants: {
            easy: { name: "Bronze Monocle Badge", stroke: "#CD7F32" },
            medium: { name: "Silver Monocle Badge", stroke: "#C0C0C0" },
            hard: { name: "Gold Monocle Badge", stroke: "#FFD700" }
        }
    }
];
