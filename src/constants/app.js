const ap = [
    {
        id: 0,
        image: () => {
            return (
                <model-viewer
                    src="/media/models/sunglases.gltf"
                    loading="eager"
                    auto-rotate
                    camera-controls
                    rotation-per-second="20deg"
                    shadow-intensity="1"
                    touch-action="pan-y"
                    disable-zoom
                    xposure="0.6"
                    style={{
                    width: "100%",
                    height: 160,
                                }}
                ></model-viewer>
            )
        },
        title: 'Legal Advisor',
        text: 'We are looking for a versatile blockchain legal advisor to consult on compliance issues internationally (including  AML/KYC), securities laws, entity formations, and risk estate experience helpful but not required'
    },
    {
        id: 1,
        image: () => {
            return (
                <model-viewer
                    src="/media/models/chain.gltf"
                    loading="eager"
                    auto-rotate
                    camera-controls
                    rotation-per-second="20deg"
                    shadow-intensity="1"
                    touch-action="pan-y"
                    disable-zoom
                    xposure="0.6"
                    style={{
                    width: "100%",
                    height: 160,
                                }}
                ></model-viewer>
            )
        },
        title: 'Blockchain (Full Stack) Developper',
        text: 'We are looking for a skilled developer who is comfortable with both front and back end technologies. As a lead, you will be responsible for web applications, periodic updates, technical advisory on implementation of DAO mechanics, building scalable APIs, on-boarding and evaluating developer partnerships'
    },
    {
        id: 2,
        image: () => {
            return (
                <model-viewer
                    src="/media/models/megaphone.gltf"
                    loading="eager"
                    auto-rotate
                    camera-controls
                    rotation-per-second="20deg"
                    shadow-intensity="1"
                    touch-action="pan-y"
                    disable-zoom
                    xposure="0.6"
                    style={{
                    width: "100%",
                    height: 160,
                                }}
                ></model-viewer>
            )
        },
        title: 'Marketing Manager',
        text: "We are looking for a passionate crypto and blockchain ecosystems marketing expert to drive the DAO's marketing strategy and work closely with the Founders and Investor Relations Ap. This AP will effectuate programs to maximize the DAO's presence in the blockchain and real estate communities. Must be able to think creatively and act decisively"
    },
    {
        id: 3,
        image: () => {
            return (
                <model-viewer
                    src="/media/models/portfolio.gltf"
                    loading="eager"
                    auto-rotate
                    camera-controls
                    rotation-per-second="20deg"
                    shadow-intensity="1"
                    touch-action="pan-y"
                    disable-zoom
                    xposure="0.6"
                    style={{
                    width: "100%",
                    height: 160,
                                }}
                ></model-viewer>
            )
        },
        title: 'Investor Relations',
        text: "We are looking for an experienced, high energy investor relations lead to work closely wiht the Founders to engage new investors and build partenrships domestically in U.S. as well as globally, with special emphasis on UAE."
    },
    {
        id: 4,
        image: () => {
            return (
                <model-viewer
                    src="/media/models/accelerometer.gltf"
                    loading="eager"
                    auto-rotate
                    camera-controls
                    rotation-per-second="20deg"
                    shadow-intensity="1"
                    touch-action="pan-y"
                    disable-zoom
                    xposure="0.6"
                    style={{
                    width: "100%",
                    height: 160,
                                }}
                ></model-viewer>
            )
        },
        title: 'Project Accelerator -FILLED',
        text: "We are looking for highly experienced project accelerator thoroughly versed in blockchain technologies with specific  applications to commercial  real estate and/or  physical assets. The  project accelerator will  advise the founder team on  organizational growth,  grant applications,  technology selection, and  prospective VC engagements. Must be able to call out risks and be no stranger to ambiguity."
    },
    {
        id: 5,
        image: () => {
            return (
                <model-viewer
                    src="/media/models/calculator.gltf"
                    loading="eager"
                    auto-rotate
                    camera-controls
                    rotation-per-second="20deg"
                    shadow-intensity="1"
                    touch-action="pan-y"
                    disable-zoom
                    xposure="0.6"
                    style={{
                    width: "100%",
                    height: 160,
                                }}
                ></model-viewer>
            )
        },
        title: 'Accounting Manager -FILLED',
        text: "We are looking for an experienced finance and accounting leader readily able to build accounting systems and operating procedures. Background in financial modeling and DeFi is essential."
    },
]

export default ap;