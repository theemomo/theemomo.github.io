'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ee73db24e0a1cb2daacd92cbe39050bc",
".git/config": "70ddef759c6bf3c526982d991eaa117d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5285a5341a1658b0b3ae6ac854ebb8f6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d9340667a05df9a5c727541ad3867d64",
".git/logs/refs/heads/master": "d9340667a05df9a5c727541ad3867d64",
".git/logs/refs/remotes/origin/master": "bdd601145458310ec955db0759d0e997",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/04/083b17b970e43b0c6724e5cdf386f96a3b72bd": "0aec88e8c32640a256f795e35ff60908",
".git/objects/08/184f8f68a081c57e7b693111bc071d8f4adbb2": "41e5a363d52b31683706e5c34b49a39e",
".git/objects/0a/1bb33a4c46840938a4b896020db07bb04354c0": "ba2dddf6fad4a3e9cb9c24d4593b068c",
".git/objects/0c/ce156b3f853d4ac7b9f2cb16f37abe79565f0f": "fdcec4e0b2f4348580f5e4e294c7e21f",
".git/objects/0f/2379e4fe2e8da540ea4311679fd7235f58af06": "25a3111f21b85cd79c0ded5c4fabc57f",
".git/objects/11/ca94bc9d1bce613bad3cac0bcfa7fca0f1deb6": "fc45b2c1e067286164384f49d3fec73c",
".git/objects/16/58e5d6e2a7e2489e6137dfb8cb35d5f7bc128d": "f0221ea284d0c9c32cccbe09facf626b",
".git/objects/1b/fb11e8ec540cb282e1deb8e67d87592dbe83ec": "96a4c268083a2618c906fafd90a2b8df",
".git/objects/1c/adbd626018f4ae26095c1ebcf0657bd8df290c": "f1caebbd8d0793db3712608efdb74b7e",
".git/objects/1e/bddca86d6d1aa1fb1335ee82858f259fe48d8e": "f614432655c7a858067266d174f7213a",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/21/aaffc9976e18e92243941d24e2665bb76dcf39": "b44709db5ace9e6392f8d7d9e7f5b0e8",
".git/objects/25/f522c99a0134532f2da4200db40e12c609563e": "be4c37214f56dc3a03b0dbe9bf60e0b4",
".git/objects/29/aea4cb2209ead4adc6b96c0b63579666185064": "7d023927f3b1fee795d5e6d7d3d4d8e8",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/6a3d5c6d9d487cabe1511073124d799b6e2b5d": "ba1c4c68b775ddb34fe2c9ce683673a1",
".git/objects/2b/f5a57e57992934f799044da1bce9a160d16766": "f1726b1eea2c81e898df76b58e7e9aa3",
".git/objects/2c/8ca434ce91e217a0437a2ebde5097b4f8072d2": "1d17c9aef1a2aa33230ad1428c28f2d2",
".git/objects/2d/e89875222958662e0c1d924ff4643d1d839cb0": "9a83a3b1e93fcb639b1d5cd8484f62b8",
".git/objects/30/2066a42ef6d3ab66d3196e6f22ce685074da9a": "9772c8ede531433fc48cdce07453d153",
".git/objects/30/82e0d7cc322a4754c946b538d91cd868dead57": "7be95199efc1008c10acba555f33a595",
".git/objects/31/bb42e0ba9565de02d0ae9d58bb59ffe3f9029b": "83a0a7e755cce7ace89b9a014003be43",
".git/objects/32/4f90f2ba6086dc1ae43f561ad1825dbefa1d09": "367c4156fe3300f8511ef887f4454c36",
".git/objects/34/493cdebcd7c74994727a10679a702e6b1cea76": "ff2b1ffd3558cea8c5ec37562c194fe6",
".git/objects/34/9e6998ccb0c9c0fe87c70347577a98b98940af": "971f36ee5fa5d3002f2d8880234e8142",
".git/objects/3a/2996791e52637f75c98e6d96be84a4796c8952": "07c94b1ffd025ce28b077dfe83713702",
".git/objects/3f/28bc33361225d9f40e9a851e00af075aed991b": "2dd622c1afc490b72ff3424eaa289a63",
".git/objects/42/f8af2b1e78c8ccd78b8ff7c98c73cd1cc9d3fb": "2a2b988a4c0d167630fe82ea3ecf7344",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/8f4bdf3b67349770a7316821c02dcddea03a13": "f2d82db09172f9ef3d508894db57a1ec",
".git/objects/48/1db283c5a5d116aed063931596cd9e2f417052": "a373002338758a15b19267e1556a0e3d",
".git/objects/4c/604d1dada4c51a81f362dbd37bcd468ebf446c": "6c15127f2ef021c6795a029966ddb7b5",
".git/objects/4d/21419229cdafa0a2582cfafeb0ef452517efd2": "4a19f1d8ab1ab9e211afd39bb5cece43",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/53/3cbf7ed80f55722835c08c767229c2be55d9ae": "ba904f1366db1d547a2740619c46c924",
".git/objects/56/95fc4f866559e2235293d4cf1c0077f7bdd654": "9d9548431a2b1386d58b883a7f414bad",
".git/objects/58/09b55a5ef4131326095f7a1c0984f82abeab81": "930cf82dccb0205a49ee21ef493a457c",
".git/objects/5a/2cce7318150e7dffd4bf614e6600246022ad59": "7ea6b8ce98af0729b579028f173692e2",
".git/objects/62/788fca65e9c435680c569e3b09f3e304e403e5": "a9a6b235636a90093d26ef7220bca50d",
".git/objects/66/ded07840746656fe566721a0197aae88bff368": "b434aca85514272097e0a5a46a0a43f4",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/d6db1fb5e5952985710ef31036331a34550251": "f2c87b0c0fe96ff4573cca6de8d07da8",
".git/objects/6e/ca2d64e8e19bc7a07bd0183ffee90af2d4f345": "2cd6a56b246d79c42b926e44afc1ed50",
".git/objects/6f/ed8702cd044fb7215ca7c89a33d6e0305a3ff6": "9b0d8bd398aa4b781aace544d195867d",
".git/objects/71/bfcc6d82526e8f3f82fe76e3f1bd96668eba05": "1febd32b5db2d1e7ae9d18113d5eb6b3",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7a/7506b04d924852777858f854f6191e092b3452": "606ede23b84e13fce19c17b8a7305185",
".git/objects/7b/4f4d723528b0b3335190c6cfbbfbc54a150688": "f00d3251ecea3d3d1ce75e39e72d75c1",
".git/objects/7d/5198294e914032ddaa6ff56443cb2eae2204d9": "ceaf27c4079d08a2ceebbc03b511ab7b",
".git/objects/80/9ff39c9f21946991192100461e01a63b5149e2": "712a506de22a4a8e97b30658b3a64219",
".git/objects/81/ccadfbf4d3ca53885453837dfecd1c94b9ea88": "09df24aaf8e6d253dd634a6f1c59151a",
".git/objects/82/8f20423f994243d965dc00c3fa9d4bdc534d07": "8ae475dc9576e7413b09794753f53ee1",
".git/objects/83/4f5531a5956d64a6b822daa9fc7e9abf092ad2": "d6b5eea474dc7b503c286a3c91dea1e3",
".git/objects/84/e4d2f94a84252f835eba73a55f28cd38c318e3": "296f6468ece1d09fe24c688f5ce24c41",
".git/objects/87/b6caf691c1d5b5262064ef90ac1f4928aff7c9": "8475a585ff3b2155e457e069db9799ff",
".git/objects/88/0216924124d6e439b817ed72a08f38042fd00f": "96d83e920025421c7bf1211f303c5573",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/b91a5fcb5bf4bcb0d8ccf8c261ecedc3ae4243": "5f760d4dc7db466c4b4b68c915317314",
".git/objects/8b/eccc1d27acdcef805ba7217a936c6d8a803323": "738a62f7a7047d043fe587edd13dc637",
".git/objects/8d/67be1ed27a15c0acbffffde0a703326628ea96": "a9939c036d6f80a94402c5d9330ee8e4",
".git/objects/8d/da75e87ee5c23aab0ec5faedb10fd91476afde": "dc0672a92117263839ac472da1707ee8",
".git/objects/8e/0beb33eaf90a5299c6f07d206065a75886e8b9": "881c1bd3b926b7a4cf7e68164d5a3be6",
".git/objects/8f/f54efe8fbadddec6c1dc066a254b5971bf456d": "d12c1bf4c8dfa4af5101a3963f730471",
".git/objects/90/6e5f59bb614ba730b8d167d0964465f7161c95": "884104adfeac952bb8a304752683aff6",
".git/objects/91/8c4af1693ffebe416eb1a688a0de0bbb266da3": "41922d02cebe4babc2c7e6cc0ac06b5b",
".git/objects/92/1a9101ad91078091ade20763e5d7a3b0ae512a": "571e314af1d529ca2c6ac9b450470c04",
".git/objects/92/ba3dab4d359f9260d0c82a054e8538861024f4": "972b4e01fffc1b887295be54b66c7329",
".git/objects/94/780b657888225fc41a4b9c6c4fedfda582e0d7": "afc33bcacdbb3dfa9972f9933f02f6f3",
".git/objects/96/285dd980f9ac8903a9885ab2070640693c0e53": "b3ca537dae3f8ac4b3e1c2e814a112c7",
".git/objects/97/bd9d7c484e67b59c8f09b3dac7a0e66e3a8991": "e0cdd92aed4473078370874f9d362f91",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/2bbd1e95b01d72d736586ae8aa01e736fceac2": "0e9f855b24ad321e3e45df2ad1fcd179",
".git/objects/98/4f10a0a87cc4dce76a35c0f993073e124b7ca7": "610a1c265956501af9e2a0de73951ad8",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9c/c8928932d5e1c329813c988f0258e44f97096c": "5e6c5ab72a383f9461ef4be93c4890a5",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9f/75cbe64ac5974d1393c99657d6a90be2f79935": "b16213b16f08a7b2f8af394f8d09f35d",
".git/objects/a1/7a7cb733a37d72e16d6aecc2ded9813e4fed25": "70536ab71f76201f810369f04c501cbf",
".git/objects/a4/6b0f51c6970f9efc48b26c90db8b9b89cf6e6a": "7561cb3c895f7c98addd275d23dfe84d",
".git/objects/a7/43c22f0d01c67ae2c3d0eeff32039e482c403b": "1af554ff328045aea1b35d098ff917c8",
".git/objects/a7/e9f2c6b8abccf99b772e51d76ab972d2915d23": "56eff589fa2f083b4798aabd1260d30e",
".git/objects/a8/07bab171fb0aee664ca94f9c34332b23b05549": "976e25f69423c6e8f7fba79c5c17ceec",
".git/objects/a9/c4a118b44c1abc10d66476e9404f262cb56083": "712e857d99ed710201c1670720459f4b",
".git/objects/ad/802ac16ae9ef8d08a34767b41bb3b4eccdd952": "b2c461dfe5fb94b7d4f3b8b84d0318c0",
".git/objects/b0/f1e7b760922f58496ed93be30864b17892026d": "d8989f528075117dadb2647f62f349b4",
".git/objects/b1/6cd1c4703350766b3b94547f80d980cd3acd7a": "9bdb0e987bc329f694553c78c2dca726",
".git/objects/b2/ca94f560b7c5eec627fa4c9cb882cb3d09d681": "1eb806fdbd9ceada2d62b73e8bb4262b",
".git/objects/b3/5217f49d5f8d5ed4764744c951e770cd95a08b": "12af6e77d7817771080a3fd5a1614fee",
".git/objects/b3/a274095e05ff73388debbbc90fb5ed3cf27d7e": "c127d1ea9acea372f39acc5676df17e3",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/17aab1e00360f3005def7c1dead87584a53588": "87badaa4d3ce4138891ed72713a18057",
".git/objects/bd/5a42f17a385ee883c195194f82d2a7ff52ff84": "a88ff8fc4a23379ebdd0c03a610b08c1",
".git/objects/bd/62ba3c5e4522bda39e1a1604b9ea8ea49d3240": "9e1cfbc9ddef00d5d1dcf450770d6e43",
".git/objects/be/1d99cab00556451ac13f2422b0d994657e9ef0": "cbcc15708ee967d22d90fd70c0899e93",
".git/objects/bf/6edf3692aca6fcb0dcf25513add05cf83ad8c5": "e08a2f8a02204e9b1987780fe1dd1386",
".git/objects/c2/a5361fa463c2cf56c58dc0b232ce1eac503a8a": "63f22326d845ee45350aa8cf7c76d877",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d0/045a8599f7cae229aa3177f048348a69800c08": "042b1a43142426edc525ec83b3609ea5",
".git/objects/d0/08af72261cfb2ad639b3a1b18a62b0f6734f80": "5f5a1211bcc42951a6fa7b155f0d702b",
".git/objects/d2/2371fa816c34132fe1089a8a43615673071635": "9f7484715132a0abedbc3f967881c746",
".git/objects/d2/4154cde63fe9a5712d0158fde1bd56dae56439": "7d2c4c1710e41ad20fea3d35f73c4b74",
".git/objects/d3/c152fecf8071639abec85c292bc596ed6da015": "0ead5ba0f538c4c3083e416cc077c090",
".git/objects/d3/d07931edaa9ade63dba220841a3e9afd94844c": "2adfa657ce5b071acfa377f50f99bfd9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/f95a7801b479847219228a0ab50bcd07f82612": "74f61f70bdedcd8fd34c3e4320c12f8d",
".git/objects/d6/31d25b0eb68a68fc8bdaf4642d74c02f4bd86d": "569fc48b2c464f57f2cac1969ec8f9d9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/7e3bc48bbe956340573e27ddc1068ff1207adf": "647889a8fba13f104ca22636118738e1",
".git/objects/d8/77c7357ba31409f636dad399fd89f0edd776d5": "669ad3ab54088aa7ffae5b562effca47",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/11ab5ffcbbf7dd025b1805353eeefa976c42cb": "38abfe150bcb5d4b8a5c6b48f4a1ec8b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/5af6a40dd307a4761efc0417ababce9a383fe4": "4589b406cd44ffed669551fe8befb90d",
".git/objects/f4/f67b32f7363dcfe6c806260e2cd7da2af0dc04": "2f99855ece1a1c176421c5dea33f7d5e",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/1bfb0881a8af9e67360607a1ae0058faa58d4a": "00092334bc27d30a4237a8faef5f4893",
".git/objects/f7/f7121091559af828820659b3b3ce3502f01fdf": "99fa2ce4a188d128a2e7bd0cb54bb84d",
".git/objects/f8/fae4fcfe36f491a8448f56c6caeb4cbe08cb70": "f7a9b420a5cf7a6ccbad483b1156b216",
".git/objects/fb/3e805910487e06aa04baa7b9990d3e96a1bfde": "c944230ce23ad27ab2eea40fff9772a1",
".git/objects/fb/921d7bfa0dbe0966ad1e3dc37bef98f34aa4ae": "39ab0e9588007106cc6c4df6a00bb8f9",
".git/objects/fc/0db6127af3fd0dff79f5ea25d326f3a8a3c624": "29534223db1fb765925e84c9cf2013b1",
".git/objects/fd/0a64b9eb8c55eef10de45260b4d9aa7313e287": "bb48b1214fe2a6c046c9ca740dacda20",
".git/objects/fe/246086b3c37529e9c474a739fe59afe72af30c": "b551e960be4f624fd8f74c89f8b97474",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/6deb94338afb4a7f5bafd5ab10fe617f35efca": "1ef22cb41392c846c5320925cb682230",
".git/refs/heads/master": "d8da5a411d318861bfb19092cc28979f",
".git/refs/remotes/origin/master": "d8da5a411d318861bfb19092cc28979f",
"assets/AssetManifest.bin": "cffb84e774a60c466db94e063646452d",
"assets/AssetManifest.bin.json": "173ab95df5ce580c04c091d361a86929",
"assets/AssetManifest.json": "2b958ff77ffcda839c773b69eec9f193",
"assets/assets/pdf/my_resume.pdf": "9752211d51cdc1d25da56e51653f72fb",
"assets/assets/projects/ecommerce/banner.png": "3175cdeb6c424106572da3c18a364ffa",
"assets/assets/projects/ecommerce/ecommerce.png": "3e2a741df430b327585bb4289a8bf87d",
"assets/assets/projects/ecommerce/ecommerce1.png": "0e401b8126621dc50278e9146bfff9e8",
"assets/assets/projects/ecommerce/ecommerce10.png": "e7b5ccd5dd77a2b3a2ca9a984cfe0c1e",
"assets/assets/projects/ecommerce/ecommerce11.png": "815d41468bab75c3f8b95a4b7598ca84",
"assets/assets/projects/ecommerce/ecommerce12.png": "11ae2e887b84bb462c35674a0ced5889",
"assets/assets/projects/ecommerce/ecommerce13.png": "52ad9116723f2713e293181fd9d0089e",
"assets/assets/projects/ecommerce/ecommerce14.png": "a40180955ad416c41387ff26783b8b35",
"assets/assets/projects/ecommerce/ecommerce15.png": "dcecce349a12cc1bf348ddd95b585b53",
"assets/assets/projects/ecommerce/ecommerce16.png": "de60100f05bed3a565058b09bd74e3b5",
"assets/assets/projects/ecommerce/ecommerce17.png": "c7ccb1d7ea3a675c3de7a25c80215c8f",
"assets/assets/projects/ecommerce/ecommerce2.png": "da02fae17c78e918d4a901b1ae98a4e4",
"assets/assets/projects/ecommerce/ecommerce3.png": "274ed0ee8d48da23af44a6df06c13035",
"assets/assets/projects/ecommerce/ecommerce4.png": "e433dca86edbf0381caf3a01901a3cdb",
"assets/assets/projects/ecommerce/ecommerce5.png": "4c82f073a7a4523d5488d186a2c908ce",
"assets/assets/projects/ecommerce/ecommerce6.png": "b15fd4e011cecef8168ae2d748946150",
"assets/assets/projects/ecommerce/ecommerce7.png": "9fbb6f350ea4db9da31dc01030dc3ec6",
"assets/assets/projects/ecommerce/ecommerce8.png": "cc10f64229c0af140e3fc812526115d9",
"assets/assets/projects/ecommerce/ecommerce9.png": "b8b98fcd81dd898987b0a6c920a70ea7",
"assets/assets/projects/miqat/banner.png": "b1f3df11ee35abe298deb40a3bcb54e6",
"assets/assets/projects/miqat/booknow.png": "866f12e907428520249579a4b04707c8",
"assets/assets/projects/miqat/cancel%2520booking.png": "ef28b48ba2b9d338c76445f5946cf138",
"assets/assets/projects/miqat/company%2520detail.png": "c44bb5c57d0a554c8591c4be980db2a3",
"assets/assets/projects/miqat/company.png": "7d6949fbcf415278af2e34e7e54b8bbe",
"assets/assets/projects/miqat/compare.png": "3c002610441814f377f48e291e1857cd",
"assets/assets/projects/miqat/contact%2520uys.png": "9239af978d29eda185506e101cb3b1dc",
"assets/assets/projects/miqat/create%2520account.png": "f4d6332b112672f99f1fccf2f0cbd757",
"assets/assets/projects/miqat/drawer.png": "cc2fb06949a8c038b54414ce994359eb",
"assets/assets/projects/miqat/enter%2520phone%2520to%2520change%2520password.png": "d82e8a814f4e4aa3ddce13349a954be5",
"assets/assets/projects/miqat/faq.png": "9a8f6a6b3c9bce66376e6780c50adf35",
"assets/assets/projects/miqat/favorate.png": "2ec561d44cb90e36d7139c71550ed0ed",
"assets/assets/projects/miqat/favortae%2520wit%2520items.png": "faf50576ccf81d0e1b619e473bf1f37a",
"assets/assets/projects/miqat/filter.png": "b5bced247d651b03e6934da072642679",
"assets/assets/projects/miqat/gallary.png": "5b818cb8e56709a69bad8f7fe08bd031",
"assets/assets/projects/miqat/home%2520page.png": "0d6684a0d4c1cb4ef7954aca617a0bef",
"assets/assets/projects/miqat/invoice.png": "10bfc96e0970d58f3c42f525a8342334",
"assets/assets/projects/miqat/login%2520with%2520email.png": "3734a57160864bc01d85a05a443917b8",
"assets/assets/projects/miqat/loginwithphone.png": "c23dbd47e924951e04db9fffb16209b1",
"assets/assets/projects/miqat/maps.png": "3391532738b28057e1234fac8911bbb8",
"assets/assets/projects/miqat/messge%2520send%2520success.png": "59421492cd00e9f356966ce4be8588e8",
"assets/assets/projects/miqat/miqat.png": "b9072966600822aad73d071f11d3c8fe",
"assets/assets/projects/miqat/my%2520account.png": "558c25f7b2765c9868996b0c00229bbb",
"assets/assets/projects/miqat/my%2520booking.png": "d0e196e1fee43c2ba6d224c4ec86dfeb",
"assets/assets/projects/miqat/my%2520rates%2520or%2520my%2520revies.png": "3b413bb16b4560287f2894a859101c58",
"assets/assets/projects/miqat/nearby_trips.png": "19cf562e2854d9f43706dae8e6cef71d",
"assets/assets/projects/miqat/not%2520found%2520on%2520search.png": "404a74d1c54c1edfde1667beb12d3ddb",
"assets/assets/projects/miqat/notifications%2520(1).png": "58205c5142133195602bf996ec2085ea",
"assets/assets/projects/miqat/notifications.png": "ee059274c36512e7727a83834e6e066d",
"assets/assets/projects/miqat/offers.png": "98a74fceaaedc725537299e9aba9ae12",
"assets/assets/projects/miqat/old%2520booking.png": "4954aac1afcf0b2493cd4bd8af1a2a48",
"assets/assets/projects/miqat/otp%2520to%2520change%2520password.png": "668df6a63e69f4bec9a37fedc2b87b14",
"assets/assets/projects/miqat/otp.png": "34e0e55421be4b185237b3fa943d2cb8",
"assets/assets/projects/miqat/pay.png": "942c9c829b10969890cc8225c6cdbe67",
"assets/assets/projects/miqat/payment%2520success.png": "016016e408ffde7208a660b15bd0ca8a",
"assets/assets/projects/miqat/points.png": "c4bd5ed4ecfc9c9f5bf3232f1fd0df05",
"assets/assets/projects/miqat/polices.png": "737644f90f9559c64662b75e7ef13e2c",
"assets/assets/projects/miqat/rate%2520success.png": "3fbf1533210f4e0f4f6f3ebda0f7bd26",
"assets/assets/projects/miqat/rate.png": "404927d450f368a9a9364eeb25962f05",
"assets/assets/projects/miqat/reviews.png": "f3224e877447687c71c41879f5b0c603",
"assets/assets/projects/miqat/search%2520result.png": "6c3622c951bf2aa0c84937337d4d547b",
"assets/assets/projects/miqat/settings.png": "674009e2d7d461f1c4fcf314bd729c01",
"assets/assets/projects/miqat/splash.png": "18e2da7b40e8a63651f23a3da3b315a4",
"assets/assets/projects/miqat/track%2520driver.png": "f33b07d2c21257e44d607c85a246b8ad",
"assets/assets/projects/miqat/trip%2520details.png": "fbac2fca320f5fad4f82849ba4080a2d",
"assets/assets/projects/miqat/trip_details.png": "8fa8b4982ae8f0e65641bce846130a0f",
"assets/assets/projects/miqat/who%2520are%2520there.png": "f18448a440506f98c63381d46ea6a9fa",
"assets/assets/projects/safescan/banner.png": "d45225882ad0afce4adf20113182b2e5",
"assets/assets/projects/safescan/Login.png": "642edf9472733d68de5c25fe955f0ca1",
"assets/assets/projects/safescan/main%2520(1).png": "ced0ef8720cb8ae3d17b375cd1b60cbf",
"assets/assets/projects/safescan/main%2520(2).png": "65c32bf93308a2f9e8ae8cf7e6fe369d",
"assets/assets/projects/safescan/main%2520(3).png": "24075d845723e34be2d7b7bfa901cf51",
"assets/assets/projects/safescan/main%2520(4).png": "8e6e136355fc84479c87fef500e29260",
"assets/assets/projects/safescan/main%2520(5).png": "13e4263c6529bc74b765dde99daea62b",
"assets/assets/projects/safescan/main%2520(6).png": "420707d59dcd2945952ed78523760bf4",
"assets/assets/projects/safescan/main%2520(7).png": "a5496e86673acb5f8dbef32b4a42733a",
"assets/assets/projects/safescan/main.png": "b67619cacaa701ef65f0120c1714f9dc",
"assets/assets/projects/safescan/OTP.png": "d1a8895722026d8f0b8ce20e0bc9db12",
"assets/assets/projects/safescan/Reset%2520password%2520by%2520email.png": "1ff7c4fd49800be6b025f725234b598e",
"assets/assets/projects/safescan/Reset%2520password.png": "62730e9d7baaef0c33ed893fc816b794",
"assets/assets/projects/safescan/Rest%2520password%2520by%2520phone%2520number.png": "7317854e5d71f42b6c58eb41da4cfac3",
"assets/assets/projects/safescan/safe_scan.png": "82368c9269bf1848eb83c11eab7c02c9",
"assets/assets/projects/safescan/Sign%2520up.png": "fb8ec33e81ebea7506913e16ee72b953",
"assets/assets/svgs/android.svg": "376bf5b5733d2dfc9845a651e8a21c85",
"assets/assets/svgs/api.svg": "385c583959ca02162bd9d2d7ee5847cb",
"assets/assets/svgs/arrow_scroll.svg": "7e7b6ea3b1d4009320166648d3f98393",
"assets/assets/svgs/dart.svg": "efd3ef176e2b9fcb29fa7ae1d71b2288",
"assets/assets/svgs/drive.svg": "32c9485355ab61de414e7fc5eb204667",
"assets/assets/svgs/firebase.svg": "7f1bf2795e067daf4ac3b42a2a140496",
"assets/assets/svgs/flutter.svg": "749737f954a8acaae1b3d389b3fc857f",
"assets/assets/svgs/git.svg": "395d8c6917b47ac4dcde3600673f6519",
"assets/assets/svgs/github.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/svgs/github_contact.svg": "caf65467ad98cd05d95978d6fa7ea520",
"assets/assets/svgs/gmail.svg": "f348bd98d52902b3918f5a4e5c3aa31a",
"assets/assets/svgs/ios.svg": "4839d919fcf3af179ec68ff8ff79b71c",
"assets/assets/svgs/linkedin-blue.svg": "07c1f76692e2893642a4801f609894d8",
"assets/assets/svgs/linkedin.svg": "3319ee8e6d0ed4caf2b2273b27634035",
"assets/assets/svgs/mail.svg": "bb071b4516f8c3c214dd14e1904b0fd9",
"assets/assets/svgs/main.svg": "fc6a235f974c34c7ee10e3f94fd5eb7b",
"assets/assets/svgs/main2.svg": "e6b4da03819a083c18dd6ab9962b66a8",
"assets/assets/svgs/supabase.svg": "357c209cd8c6fa1c20761fe5486aac22",
"assets/assets/svgs/vscode.svg": "4e4468f1285d5c6eeb722177a2695ac7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f9c0ccbc7507a0eeb1f069ad2032cb8e",
"assets/NOTICES": "6ef4710bfda500b821c5c09dea61eebe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "3203606d6424b6a55168848ba240c58f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf1e45747974a42ebcf850f57cc46223",
"/": "bf1e45747974a42ebcf850f57cc46223",
"main.dart.js": "2a5026234e9cd5d216dbe785ae437426",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
