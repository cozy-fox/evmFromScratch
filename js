[33mcommit ce097ab909701fb6300eb093abbba16f7937e829[m[33m ([m[1;36mHEAD -> [m[1;32mmain[m[33m, [m[1;31morigin/main[m[33m, [m[1;31morigin/HEAD[m[33m)[m
Author: w1nt3r-eth <w1nt3r.eth@gmail.com>
Date:   Wed Apr 12 16:45:35 2023 -0700

    Add new PUSH0 opcode (EIP-3855)

[33mcommit b1999a8507cd54acb902a9dca46ef3e4a3f52bcc[m
Author: w1nt3r-eth <w1nt3r.eth@gmail.com>
Date:   Sun Nov 27 18:27:07 2022 -0800

    Rename Run to Evm

[33mcommit b0c0f1446f2fd89f0a144995cc3068cea350f8b6[m
Author: w1nt3r-eth <w1nt3r.eth@gmail.com>
Date:   Sun Nov 27 17:58:28 2022 -0800

    Encode big.Ints as hex before comparing

[33mcommit d2f1edcc1281e76875193be095f1d5ceea8a4127[m
Author: Damian <damianmarti@gmail.com>
Date:   Wed Nov 16 14:30:10 2022 -0300

    Add ruby template

[33mcommit 6d26d3dab7c78e1a7eb102deeb0e73befcea13ef[m
Author: Arran Schlosberg <me@arranschlosberg.com>
Date:   Thu Nov 17 10:43:45 2022 +0000

    Use `json.Decoder()` instead of entire buffer

[33mcommit e3dfbb636f6de6d5961f20e1b75fbe62576df5ea[m
Author: Arran Schlosberg <me@arranschlosberg.com>
Date:   Wed Nov 16 07:53:27 2022 +0000

    Fix package comment

[33mcommit d44bc34751ec204935d1d3e8a44f0b2512fbe579[m
Author: Arran Schlosberg <me@arranschlosberg.com>
Date:   Wed Nov 16 07:47:54 2022 +0000

    Idiomatic Go harness using `go test`

[33mcommit 48bd389dcc19d96cfee6f05051f860fe87a43c9d[m
Author: w1nt3r-eth <w1nt3r.eth@gmail.com>
Date:   Tue Nov 22 13:51:43 2022 -0800

    Fix PUSH2 test

[33mcommit 9bdee1e31963b722e0ffbf0a24a6d5a4ee0eecf2[m
Author: Oleg Akbarov <olegakbarov@gmail.com>
Date:   Tue Nov 15 22:48:42 2022 -0800

    number -> bigint

[33mcommit e3cc8b82974e1ad997b26b60904361cb69fba16b[m
Author: Oleg Akbarov <olegakbarov@gmail.com>
Date:   Tue Nov 15 22:27:46 2022 -0800

    add return type fpr evm
    
    Small, quality of life improvment

[33mcommit c5ef5c24e4a99a63f65a5bb966ece69451ca1e16[m
Author: w1nt3r-eth <w1nt3r.eth@gmail.com>
Date:   Tue Nov 15 08:32:44 2022 -0800

    More PUSH* tests

[33mcommit f4602fbf815299516a008aca32aabb0b4c75521a[m
Author: w1nt3r-eth <w1nt3r.eth@gmail.com>
Date:   Sun Nov 13 21:56:22 2022 -0800

    Add more code to the template

[33mcommit e6f0a95bf5aa2d73155f5e41bcdb8ca6ca02aa2b[m
Author: w1nt3r-eth <w1nt3r.eth@gmail.com>
Date:   Sat Nov 12 20:06:53 2022 -0800

    Print hints from language templates

[33mcommit d6a473092693a79740c0d3854327659d164880e1[m
Author: w1nt3r-eth <w1nt3r.eth@gmail.com>
Date:   Sat Nov 12 20:00:59 2022 -0800

    Add hints

[33mcommit 9ac51a5cf8da7dd39b8cbc031d05cb761f6f7aaf[m
Author: w1nt3r-eth <w1nt3r.eth@gmail.com>
Date:   Sat Nov 12 17:55:40 2022 -0800

    Validate success field

[33mcommit 613523f1bc06202293fc8394999410b81cbbe853[m
Author: w1nt3r-eth <w1nt3r.eth@gmail.com>
Date:   Sun Nov 6 20:11:19 2022 -0800

    More opcodes

[33mcommit 068361537879c3ed3f07e146bcfc14b99f1c9612[m
Author: w1nt3r-eth <w1nt3r.eth@gmail.com>
Date:   Sun Nov 6 18:55:39 2022 -0800

    Missing assembly codes

[33mcommit 5f312d8cbe5b4d2bdcb2d9b7891846304e9fa373[m
Author: w1nt3r-eth <w1nt3r.eth@gmail.com>
Date:   Wed Nov 2 08:45:06 2022 -0700

    Fix JavaScript template stack comparison

[33mcommit db56bdfe48d3a9822e48598ded5cb76ffde25e13[m
Author: Iain <iain@zora.co>
Date:   Mon Oct 31 18:32:09 2022 -0400

    add gitignore for OSX and rust target builds, update integer parsing

[33mcommit 970d3d0b74755e68d75ccc8930efa9cfee47185e[m
Author: w1nt3r-eth <w1nt3r.eth@gmail.com>
Date:   Mon Oct 31 11:38:01 2022 -0700

    Add more instructions

[33mcommit 0f542ece15a9cd610e270eec193f36cff78a6be6[m
Author: w1nt3r-eth <w1nt3r.eth@gmail.com>
Date:   Mon Oct 31 11:11:03 2022 -0700

    SELFDESTRUCT

[33mcommit 11c88e4870087ef6348d34e5b44a029abe9a4e29[m
Author: w1nt3r-eth <w1nt3r.eth@gmail.com>
Date:   Mon Oct 31 11:02:48 2022 -0700

    INVALID instruction tests

[33mcommit 025ba96b840ed6040fa52fc31f6b87099009fae9[m
Author: w1nt3r-eth <w1nt3r.eth@gmail.com>
Date:   Mon Oct 31 10:58:39 2022 -0700

    RETURNDATASIZE & RETURNDATACOPY tests

[33mcommit 667f6c5e3eb00c92b3a9b4a9da80301911022487[m
Author: w1nt3r-eth <w1nt3r.eth@gmail.com>
Date:   Mon Oct 31 10:50:37 2022 -0700

    STATICCALL

[33mcommit debfa202df5d118a16f910b7143af3739aac76ba[m
Author: w1nt3r-eth <w1nt3r.eth@gmail.com>
Date:   Mon Oct 31 10:44:15 2022 -0700

    Add DELEGATECALL

[33mcommit ffdad49aefd2a33a5bbd1c0237dab5d0390bac04[m
Author: w1nt3r-eth <w1nt3r.eth@gmail.com>
Date:   Mon Oct 31 10:24:46 2022 -0700

    LOG* and more

[33mcommit 668901c2e3ec9b65986f67643748d8a633507bf9[m
Author: karmacoma <karma@coma.lol>
Date:   Wed Oct 19 16:56:03 2022 -0700

    Update Python template
    
    - check that the stack content matches (deep equality check)
    - parse hex values in `test['expect']['stack']`
    - locate evm.json even if we run from a different folder
    - cosmetics: format strings, emojis in output

[33mcommit 13e08efa5a8abc1d2c7e119e1ba48f0ded1c0eb2[m
Author: w1nt3r-eth <w1nt3r.eth@gmail.com>
Date:   Mon Oct 24 19:22:39 2022 -0700

    Mark Jest tests as todo

[33mcommit 91cfefe6fc270a23531ebde4cc06cd51c0672125[m
Author: olawolu <gbemigaolawolu@gmail.com>
Date:   Tue Oct 18 18:46:36 2022 +0100

    added a go.mod file to make it easier to import packages

[33mcommit 1a775ee304d237a2e444e2b33a789cdb2ffaad01[m
Author: wp-lai <techwplai@gmail.com>
Date:   Mon Oct 17 20:19:44 2022 +0800

    feat: add rust template

[33mcommit 13ca0a44832e8eba979f933814f09a73118eb80f[m
Author: w1nt3r-eth <w1nt3r.eth@gmail.com>
Date:   Sun Oct 16 20:47:24 2022 -0700

    Initial commit
