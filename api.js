const GETAPI='https://script.google.com/macros/s/AKfycbz_CKGlseG5_tQ6MKmnWE5_WQOsGLEFb5VdVbhvDSmwM4OLRfZR-qpy859YFfneCV9m/exec';
const EMAILAPI='https://script.google.com/macros/s/AKfycbzJPs5A97BL_7QnYKSteGWM5QYXax9WcG_QSzksg20NQJgWg1ojORiZBP5b26F_kSfO/exec';
const INTERNALSTORAGE='/sdcard/';
const APPLOGO='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAIABJREFUeF7t3QfYLFlZJ/D/S1DJMpJEdFVAkqIoQUDYBXdVdAVByQIiIIgYcFfiiiIowRUXlQcZQECCOGRMqIgSJAsCSk5KUMkjYZSBOduH7cveuc699wvVXVVdv3qeeRCm+pz3/Z3y6f/XXX2q4iBAgAABAgQWJ1CL61jDBAgQIECAQAQAFwEBAgQIEFiggACwwEXXMgECBAgQEABcAwQIECBAYIECAsACF13LBAgQIEBAAHANECBAgACBBQoIAAtcdC0TIECAAAEBwDVAgAABAgQWKCAALHDRtUyAAAECBAQA1wABAgQIEFiggACwwEXXMgECBAgQEABcAwQIECBAYIECAsACF13LBAgQIEBAAHANECBAgACBBQoIAAtcdC0TIECAAAEBwDVAgAABAgQWKCAALHDRtUyAAAECBAQA1wABAgQIEFiggACwwEXXMgECBAgQEABcAwQIECBAYIECAsACF13LBAgQIEBAAHANECBAgACBBQoIAAtcdC0TIECAAAEBwDVAgAABAgQWKCAALHDRtUyAAAECBAQA1wABAgQIEFiggACwwEXXMgECBAgQEABcAwQIECBAYIECAsACF13LBAgQIEBAAHANECBAgACBBQoIAAtcdC0TIECAAAEBwDVAgAABAgQWKCAALHDRtUyAAAECBAQA1wABAgQIEFiggACwwEXXMgECBAgQEABcAwQIECBAYIECAsACF13LBAgQIEBAAHANECBAgACBBQoIAAtcdC0TIECAAAEBwDVAgAABAgQWKCAALHDRtUyAAAECBAQA1wABAgQIEFiggACwwEXXMgECBAgQWHwAaK1dIsnXJvmqJJdM8hXrfy6Q5HxJvsxlQoAAAQKzFPi3JGck+XSSjyb5SJIPJXl/kvdW1Ydn2dVARS8mALTWLp7k25J8c5KrJvnGJJdN0t/oHQQIECCwPIEeDN6Z5O+SvHH9z98sJRjsbABorV0myXcluV6Saye5wvKubR0TIECAwAEE3rZ6/3h5kpcm+bOq+sABxpj8S3YmALTWzrVaqOskuXGS70nyTZPXVyABAgQIzEGgfzrwgiTP78Ggqtocij5ZjbMPAK21ayW5ZZKbJ+l/9TsIECBAgMCmBN6X5BlJnl5Vr9nUJNsYd5YBoLV2kfWb/o8n+ZZtQJmDAAECBAgcI/CWJE9a/fH5uKrqNxnO6phVAGitXTHJPZPcbn2H/qywFUuAAAECOynQf2nwu0keUVVvn0uHswgArbX+3f59k3xvkv5dv4MAAQIECExN4KzVr83+YPXz8YdW1SunVtyx9Uw6ALTW+s/1/tf6+/2pW6qPAAECBAgcEXhh/8O1ql47VZJJBoDW2tcnefjqN5k3SzLJGqe6oOoiQIAAgckI9F8LPDPJvarqvZOpal3IpN5cW2t9U56fW+3cdG878E3tUlEPAQIECBxQ4LNJfrt/ol1VnzzgGIO/bDIBoLXWv99/dJKvGbxLAxIgQIAAgfEFPrjajvgeVfWc8UuZwMfrrbW+//4j1z/rm4KJGggQIECAwCYFnpbkZ8becnjUTwBaa9+d5AlJvnKT0sYmQIAAAQITE+gPIrpTVfVfDYxyjBIAWmv9KXsPXT2d6Sfd5DfKupuUAAECBKYh8OQkP15V/cFEWz22HgBaa5dbPY3v2fbq3+o6m4wAAQIEpivQnzVws6p61zZL3GoAWN/o95TVd/4X3WaT5iJAgAABAhMX+Nckd6iq526rzq0FgNZa38nvl33kv62lNQ8BAgQIzEyg7yR4n6r61W3UvfEA0Fo7d5Lf7N9xbKMhcxAgQIAAgZkLPH59X8CZm+xjowFgvbHPs5L0u/0dBAgQIECAwN4E/rhvg19Vn9nb6fs/a2MBoLV2wSTPT3KD/ZflFQQIECBAYPECL03y36uq3x8w+LGRANBaOyXJnya5+uAVG5AAAQIECCxH4NVJblRVHxu65cEDQGvtIkn6U5C8+Q+9WsYjQIAAgSUK/G2SG1bVx4dsftAA0Fo7f5IXJLnekEUaiwABAgQILFzgFUm+q6o+NZTDYAGgtfalSfpNCzccqjjjECBAgAABAl8U+PP1PQH96YKHPgYJAK21Ps6Tktzu0BUZgAABAgQIEDiewO8luW1VtcMSDRUAHtSfc3zYYryeAAECBAgQOKnAL1bVA0961klOOHQAaK3dNknf3tdBgAABAgQIbF6g//V/m6p6+mGmOlQAaK1ddbXJT78xod/85yBAgAABAgS2I3BGkutW1esPOt2BA0BrrT/Q5zVJLnvQyb2OAAECBAgQOLDAO5Nco6o+cZARDhMATuvbFB5kUq8hQIAAAQIEBhF4dlX94EFGOlAAaK3dJcmpB5nQawgQIECAAIFBBe5YVU/c74j7DgCttcsneV2Svte/gwABAgQIEBhX4JNJrlZV79pPGfsKAK21cyX5Kzv97YfYuQQIECBAYOMCL+4P39vP/gD7DQB3T/KojbdhAgIECBAgQGC/Anetqj1/Pb/nANBau8zqpr+/T3Lh/VbkfAIECBAgQGDjAqcnuXJVfXAvM+0nAPx+klvsZVDnECBAgAABAqMIPLWqfngvM+8pALTWrpPkZUn2dP5eJnYOAQIECBAgMLhA3yXw+lXV37NPeJz0DX1949+rklz9ZIP59wQIECBAgMDoAv2Xen2DoLNOVMleAsBtkjx19HYUQIAAAQIECOxV4BZV9YwDB4DW2rmT/F2SK+51RucRIECAAAECowu8PclVqupzx6vkhJ8AtNbumOR3Rm9DAQQIECBAgMB+BW5XVcd9Wu9xA8D6r/+3rh71e7n9zuh8AgQIECBAYHSBt61/FniO9wKcKAD0hws8c/TyFUCAAAECBAgcVOAHqup55/TiEwWAlye59kFn9DoCBAgQIEBgdIGXVtX19xwAWmvXTNJ/+ucgQIAAAQIE5i3QfxL42mNbOMdPAFprj0/yo/PuV/UECBAgQIBAkseutgf+sZMGgNbahZL0fYQ97td1Q4AAAQIE5i/wqSSXrqr+2OAvHv/hE4DW2t2SPHr+/eqAAAECBAgQWAvcpaoed7IA0PcPvi4yAgQIECBAYGcE/qqqbnDcALB+5O8/JDnXzrSsEQIECBAgQKDvBfDVRz8q+GxfAbTW7pnkEZwIECBAgACBnRP4qar6zSNdHRsAXpLkejvXsoYIECBAgACBs30N8MUA0Fq7SJIPJzkvIwIECBAgQGDnBM5McvGqOr13dnQAuPlqz+DTdq5dDREgQIAAAQJHBG5WVc85NgD0nwfciREBAgQIECCwswKnVtVdjw0A70xy2Z1tWWMECBAgQIDA26rqil8MAK21Syb5Zy4ECBAgQIDATgu0JJeqqg994R6A1trNkjxrp1vWHAECBAgQINAFvvCI4CMB4GFJ7sWFAAECBAgQ2HmBh1bVfY8EgBck+e6db1mDBAgQIECAwB9X1fcdCQD96X9fyYQAAQIECBDYeYH3VdXXVGvtYusNgHa+Yw0SIECAAAECXxA4pQeA6yT5ayAECBAgQIDAYgSu1QPAbZM8ZTEta5QAAQIECBC4VQ8A90/yYBYECBAgQIDAYgTu2wPAqUnuspiWNUqAAAECBAg8pgeA5yW5MQsCBAgQIEBgMQLP6QHgZUmuu5iWNUqAAAECBAi8pAeAtya5AgsCBAgQIEBgMQJv7gHgn/qDARbTskYJECBAgACBD/YA8PEkX86CAAECBAgQWIzAx3oA+HSS8y+mZY0SIECAAAECn+4B4HNJzs2CAAECBAgQWIzAmT0AtMW0q1ECBAgQIEDgCwICgAuBAAECBAgsUEAAWOCia5kAAQIECAgArgECBAgQILBAAQFggYuuZQIECBAgIAC4BggQIECAwAIFBIAFLrqWCRAgQICAAOAaIECAAAECCxQQABa46FomQIAAAQICgGuAAAECBAgsUEAAWOCia5kAAQIECAgArgECBAgQILBAAQFggYuuZQIECBAgIAC4BggQIECAwAIFBIAFLrqWCRAgQICAAOAaIECAAAECCxQQABa46FomQIAAAQICgGuAAAECBAgsUEAAWOCia5kAAQIECAgArgECBAgQILBAAQFggYuuZQIECBAgIAC4BggQIECAwAIFBIAFLrqWCRAgQICAAOAaIECAAAECCxQQABa46FomQIAAAQICgGuAAAECBAgsUEAAWOCia5kAAQIECAgArgECBAgQILBAAQFggYuuZQIECBAgIAC4BggQIECAwAIFBIAFLrqWCRAgQICAAOAaIECAAAECCxQQABa46FomQIAAAQICgGuAAAECBAgsUEAAWOCia5kAAQIECAgArgECBAgQILBAAQFggYuuZQIECBAgIAC4BggQIECAwAIFBIAFLrqWCRAgQICAAOAaIECAAAECCxQQABa46FomQIAAAQICgGuAAAECBAgsUEAAWOCia5kAAQIECAgArgECBAgQILBAAQFggYuuZQIECBAgIAC4BggQIECAwAIFBIAFLrqWCRAgQICAAOAaIECAAAECCxQQABa46FomQIAAAQICgGuAAAECBAgsUEAAWOCia5kAAQIECAgArgECBAgQILBAAQFggYuuZQIECBAgIAC4BggQIECAwAIFBIAFLrqWCRAgQICAAOAaIECAAAECCxQQABa46FomQIAAAQICgGuAAAECBAgsUEAAWOCia5kAAQIECAgArgECBAgQILBAAQFggYuuZQIECBAgIAC4BggQIECA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';