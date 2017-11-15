import { Injectable } from "@angular/core";

@Injectable()
export class submissonStore{
    private subList: Array<SubmissionObj>;
    private statusCh = ["New", "Assigned", "Block", "Bind"];
    private cnclRson = ["New", "Assigned", "Block", "Bind"];
    private multiCk: boolean = true;
    private selectedLst: Array<SubmissionObj> = [];
    constructor(){
        this.subList = [
            {policyId: '101', label: 'Assigned - New Task', dt :new Date(), detail: 'Quote # MOT999999XX has been assigned to you for processing. ',  selected: false, status: this.statusCh, selectedStat: 'New', cancelReason: this.cnclRson },
            {policyId: '102', label: 'Approval Request Received', dt :new Date(), detail: 'Submission # LIAB99999XX is complete and @Jack has requested your approval ', selected: false, status: this.statusCh, selectedStat: 'Assigned', cancelReason: this.cnclRson  },
            {policyId: '103', label: 'New Request Received', dt :new Date(), detail: 'Submission # LIAB99999XX is complete and @Jack has requested your approval ', selected: false, status: this.statusCh, selectedStat: 'Bind', cancelReason: this.cnclRson  },
            {policyId: '104', label: 'Bind Request Received', dt :new Date(), detail: 'Submission # LIAB99999XX is complete and @Jack has requested your approval ', selected: false, status: this.statusCh, selectedStat: 'New', cancelReason: this.cnclRson  },
            {policyId: '105', label: 'Assigned Request Received', dt :new Date(), detail: 'Submission # LIAB99999XX is complete and @Jack has requested your approval ', selected: false, status: this.statusCh, selectedStat: 'Assigned', cancelReason: this.cnclRson  },
            {policyId: '106', label: 'Request Received', dt :new Date(), detail: 'Submission # LIAB99999XX is complete and @Jack has requested your approval ', selected: false, status: this.statusCh, selectedStat: 'Assigned', cancelReason: this.cnclRson  },
            {policyId: '107', label: 'New Request Received', dt :new Date(), detail: 'Submission # LIAB99999XX is complete and @Jack has requested your approval ', selected: false, status: this.statusCh, selectedStat: 'Bind', cancelReason: this.cnclRson  },
            {policyId: '108', label: 'Bind Request Received', dt :new Date(), detail: 'Submission # LIAB99999XX is complete and @Jack has requested your approval ', selected: false, status: this.statusCh, selectedStat: 'Assigned', cancelReason: this.cnclRson  },
            {policyId: '109', label: 'Assigned Request Received', dt :new Date(), detail: 'Submission # LIAB99999XX is complete and @Jack has requested your approval ', selected: false, status: this.statusCh, selectedStat: 'New', cancelReason: this.cnclRson  },
            {policyId: '110', label: 'New Request Received', dt :new Date(), detail: 'Submission # LIAB99999XX is complete and @Jack has requested your approval ', selected: false, status: this.statusCh, selectedStat: 'Assigned', cancelReason: this.cnclRson  },
            {policyId: '111', label: 'Request Received', dt :new Date(), detail: 'Submission # ENG99999XX is complete and @Michael has requested your approval ', selected: false, status: this.statusCh, selectedStat: 'Bind', cancelReason: this.cnclRson  }];
    }

    getSubList(): Array<SubmissionObj>{
        return this.subList;
    }

    processedSub(selLst: Array<SubmissionObj>){

       this.subList = this.subList.filter(function(o1){
        return !selLst.some(function(o2){
            return o1.policyId === o2.policyId;
        });
    })
    }
    setmultiCk(flg: boolean){
        this.multiCk = flg;
    }

    getMultiCk(){
        return this.multiCk;
    }

    setSelLst(sub: SubmissionObj){
        this.selectedLst.push(sub);
    }
    rmSelLst(){
        this.selectedLst = [];
    }

    getSelLst(){
        return this.selectedLst;
    }



}
export interface SubmissionObj{

    policyId: string,
    label: string,
    dt: Date,
    detail: string,
    selected: boolean,
    status: string[],
    selectedStat: string, 
    cancelReason: string[]
 }